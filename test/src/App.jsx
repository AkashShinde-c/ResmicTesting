import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {EVMConnect,Tokens,Chains} from 'resmic'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="app">
      <h1>Halvetica</h1>
      <EVMConnect  Address={"YOUR_WALLET_ADDRESS"} //Wallet address to receive funds
                Chains={[ Chains.Ethereum, Chains.Polygon, Chains.Goerli]} //Choose the blockchains to allow payments from
        	Tokens ={[Tokens.USDT, Tokens.BUSD, Tokens.MATIC, Tokens.ETH]} //Choose the Tokens to accept payments from
                Amount={100} //Amount you want to receive in USD($)
                 
                noOfBlockConformation={5} //No. of blocks to wait for the payment conformation (Optional)
                Style = {{displayName: "Make Payment",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    fontSize: "18px"}}
            />
     </div>
  )
}

export default App
