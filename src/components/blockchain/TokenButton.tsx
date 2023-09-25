import React from 'react'
import { useAccount, useBalance, useContractWrite } from 'wagmi'
import { parseEther } from 'viem'
import { tokenAbi } from '@/abis/tokenAbi'
import toast, { Toaster } from 'react-hot-toast';
import { useWaitForTransaction } from 'wagmi'

const tokenAddress = '0x05049E822f3b978ceD140C9A8f2B4d158572AF42'
const TokenButton = () => {

  const { address } = useAccount()

  const { data, refetch } = useBalance({
    address: address,
    token: tokenAddress,
  })

  const { write, data: writeData } = useContractWrite({
    address: tokenAddress,
    abi: tokenAbi,
    functionName: 'mint',
    onError:()=>toast.error("An Error Occurred")
  })

  const { isLoading } = useWaitForTransaction({ 
    hash: writeData?.hash,
    onSuccess:()=>{
      toast.success("Token Minted!")
      refetch()
    },
    onError:()=>toast.error("An Error Occurred")
  })

  function mint(){
    if(address)
    write({ args: [address, parseEther('1')] })
  }

  const label = isLoading ? "Minting" : "Mint a Token"
  return (
    <div>
      UserBalance: { data?.formatted } { data?.symbol }
      <br />
      <button onClick={mint}>{label}</button>
      <Toaster/>
    </div>
  )
}

export default TokenButton