import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import priceContracts from '../constants/priceContracts'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {cakeAddress, busdAddress, bnbAddress, lpSysBnbAddress, lpBnbBusdAddress} = priceContracts;
          const calls = [
            [cakeAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpSysBnbAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpSysBnbAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpBnbBusdAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpBnbBusdAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [cakeAmount, bnbAmount1, bnbAmount2, busdAmount] = result.map(r=>{
            if( r === '0x' ) return 0;
            return ERC20_INTERFACE.decodeFunctionResult("balanceOf", r)
          });
          const cake = new BigNumber(cakeAmount);
          const bnb1 = new BigNumber(bnbAmount1);
          const bnb2 = new BigNumber(bnbAmount2);
          const busd = new BigNumber(busdAmount);
          const cakePrice = bnb1.div(cake).times(busd.div(bnb2)).toNumber();
          setData(cakePrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
