import pic1 from '../../../assets/imgs/processes/pic1.png'
import pic2 from '../../../assets/imgs/processes/pic2.png'
import pic3 from '../../../assets/imgs/processes/pic3.png'
import pic4 from '../../../assets/imgs/processes/pic4.png'

const text = [
  "Group of Anonymous Traders will own and operate the G.O.A.T Fund by proposing, voting, and sharing the realized gains after mint.",
  "Every NFT holder will be given 1 vote per NFT, and all NFT holders can propose trades for the G.O.A.T Fund to vote on. Proposals will need to meet a certain threshold in order to advance to the final stage of a vote on Snapshot.org. The honorary advisor board can veto or approve proposals before they are finalized. All G.O.A.T Funds are owned and operated by the community after mint.",
  "After a proposal reaches the first threshold, the honorary advisor board, a.k.a. “Green Lotus” will finalize the proposal and if approved, the proposal will go directly to vote on Snapshot.org. If the proposal is not approved, it will go back to the community for a revote to attempt to achieve a higher threshold. Upon success, it will then go directly to Snapshot.org where the final vote will be made on the trade decision by the holders.",
  "All NFT holders will be airdropped a biweekly amount of SOL dependent on realized gains and a vote from the community on the amount they want pulled from the funds profits of 25%, 50%, or 75%.",
]

const processes = [
  {
    image: pic1,
    text: "SOL NFT Mint",
    ischeck: false,
    isend: false
  },
  {
    image: pic2,
    text: "G.O.A.T Fund funded with SOL",
    ischeck: true,
    isend: false
  },
  {
    image: pic3,
    text: "Proposals and voting for G.O.A.T Fund trades",
    ischeck: false,
    isend: false
  },
  {
    image: pic4,
    text: "Bi-weekly profit sharing to NFT holders",
    ischeck: false,
    isend: true
  }
]

const faqs = [
  [
    {
      header: "Trade Proposals",
      text: [
        "Holders will be able to propose trades on-chain for the G.O.A.T Fund.",
        "Any holder will be able to propose a trade once a week maximum for any of the 3 categories of the fund (one trade proposal per category).",
        "In order to propose a trade, a holder must suggest a trade thesis including timeline, entry & exit price, stop loss, conviction level, along with reasoning and any markups on charts that support the thesis."
      ]
    },
    {
      header: "Voting Procedure",
      text: [
        "After a holder has proposed a trade thesis, all holders will have the opportunity to vote to pass the trade.",
        "In order for the proposal to pass it will need to have a 51% approval rate to move forward, at which time the honorary advisor board, a.k.a. “green lotus” will finalize the proposal and if approved the proposal will go directly to vote on Snapshot.org.",
        "If the proposal is not approved, it will go back to the community for a revote to attempt to achieve a higher threshold. Upon success, it will then go directly to Snapshot.org where the final vote will be made on the trade decision by the holders."
      ]
    },
    {
      header: "Profit Sharing",
      text: [
        "Each Friday, a snapshot of holders’ wallets will be taken at an undisclosed time of day to determine eligible holders. Qualified holders will be paid out on a bi-weekly basis. ",
        "If you hold any AssetBender NFT for BOTH snapshots AND on the date of payment, you will receive 100% of the payout for the last two weeks. For wallets where all 3 of these requirements are not met, 100% of the bi-weekly payment for that NFT will be invested back into the G.O.A.T Fund. ",
        "This rewards long-term holders and encourages the long-term holding of our NFTs.",
        "This will ensure the G.O.A.T Fund benefits from flippers coming into and out of the project while rewarding committed holders.",
        "Every 2 weeks the realized gains made from the fund will be distributed by either 25%, 50%, or 75% to holders.",
        "Holders will have 24 hours to vote on how they would like this payment disbursed.",
        "After each disbursement, any remaining funds will be reinvested into the G.O.A.T Fund in order to ensure its growth over time.",
        "This will allow payments to grow due to having a larger fund size.",
        "In the case that the fund is not profitable over a two-week period, the fund will have to make up this “loss” over the next two-week period before anything is considered as profit to be counted towards a payout.",
        "As the fund fully realizes profits on trades, those profits will be allocated and distributed into a stable coin.",
        "Profits from unrealized gains will not count towards any payout."
      ]
    }
  ],
  [
    {
      header: "Long-Term Trades",
      text: ["If a trade has been executed and has not closed after 30 days have elapsed, a vote will be sent to snapshot.org where holders can vote to close the trade in order to free up liquidity."]
    },
    {
      header: "Buybacks",
      text: [
        "Buybacks using the 1 % allocation of the G.O.A.T Fund will be executed once every 2 weeks. Those buybacks will be sent to the G.O.A.T Fund wallet.",
        "They will remain in the wallet as a way for the fund to gain additional exposure to our native NFT as well profit passively from bi-weekly distributions.Later, earning exposure to $ABC token."]
    },
    {
      header: "Security and Trust",
      text: [
        "All wallet information for the G.O.A.T Fund will be public and transparent. ",
        "All trades, proposals, and votes will be public via transaction hashes.",
        "G.O.A.T Fund wallets will utilize multi-signature authentication to ensure that no one person can make decisions or trades for the fund."
      ]
    }
  ]
]

export { text, faqs, processes }