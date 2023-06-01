// pragma solidity ^0.8.0;

// import "hardhat/console.sol";

// interface IERC20 {
//     function totalSupply() external view returns (uint256);

//     function balanceOf(address account) external view returns (uint256);

//     function allowance(
//         address owner,
//         address spender
//     ) external view returns (uint256);

//     function transfer(
//         address recipient,
//         uint256 amount
//     ) external returns (bool);

//     function approve(address spender, uint256 amount) external returns (bool);

//     function transferFrom(
//         address sender,
//         address recipient,
//         uint256 amount
//     ) external returns (bool);

//     event Transfer(address indexed from, address indexed to, uint256 value);
//     event Approval(
//         address indexed owner,
//         address indexed spender,
//         uint256 value
//     );
// }

// contract Token is IERC20 {
//     using SafeMath for uint256;

//     string public constant name = "SLTN Token";
//     string public constant symbol = "STN";
//     uint8 public constant decimals = 18;

//     mapping(address => uint256) balances;
//     mapping(address => mapping(address => uint256)) allowed;

//     uint256 totalSupply_;

//     constructor(uint256 total) {
//         totalSupply_ = total;
//         balances[msg.sender] = totalSupply_;
//     }

//     function totalSupply() public view override returns (uint256) {
//         return totalSupply_;
//     }

//     function balanceOf(
//         address tokenOwner
//     ) public view override returns (uint256) {
//         return balances[tokenOwner];
//     }

//     function transfer(
//         address receiver,
//         uint256 numTokens
//     ) public override returns (bool) {
//         require(numTokens <= balances[msg.sender]);
//         balances[msg.sender] = balances[msg.sender].sub(numTokens);
//         balances[receiver] = balances[receiver].add(numTokens);
//         console.log("Transfer %s tokens to %s", numTokens, receiver);
//         emit Transfer(msg.sender, receiver, numTokens);
//         return true;
//     }

//     function approve(
//         address delegate,
//         uint256 numTokens
//     ) public override returns (bool) {
//         allowed[msg.sender][delegate] = numTokens;
//         emit Approval(msg.sender, delegate, numTokens);
//         return true;
//     }

//     function allowance(
//         address owner,
//         address delegate
//     ) public view override returns (uint) {
//         return allowed[owner][delegate];
//     }

//     function transferFrom(
//         address owner,
//         address buyer,
//         uint256 numTokens
//     ) public override returns (bool) {
//         require(numTokens <= balances[owner], "Insufficient balance");
//         require(
//             numTokens <= allowed[owner][msg.sender],
//             "ERC20: transfer amount exceeds allowance"
//         );

//         balances[owner] = balances[owner].sub(numTokens);
//         allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);
//         balances[buyer] = balances[buyer].add(numTokens);
//         emit Transfer(owner, buyer, numTokens);
//         return true;
//     }
// }

// library SafeMath {
//     function sub(uint256 a, uint256 b) internal pure returns (uint256) {
//         assert(b <= a);
//         return a - b;
//     }

//     function add(uint256 a, uint256 b) internal pure returns (uint256) {
//         uint256 c = a + b;
//         assert(c >= a);
//         return c;
//     }
// }

//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;


// This is the main building block for smart contracts.
contract Token {
    // Some string type variables to identify the token.
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    // The fixed amount of tokens, stored in an unsigned integer type variable.
    uint256 public totalSupply = 1000000;

    // An address type variable is used to store ethereum accounts.
    address public owner;

    // A mapping is a key/value map. Here we store each account's balance.
    mapping(address => uint256) balances;

    // The Transfer event helps off-chain applications understand
    // what happens within your contract.
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * Contract initialization.
     */
    constructor() {
        // The totalSupply is assigned to the transaction sender, which is the
        // account that is deploying the contract.
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    /**
     * A function to transfer tokens.
     *
     * The `external` modifier makes a function *only* callable from *outside*
     * the contract.
     */
    function transfer(address to, uint256 amount) external {
        // Check if the transaction sender has enough tokens.
        // If `require`'s first argument evaluates to `false` then the
        // transaction will revert.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Transfer the amount.
        balances[msg.sender] -= amount;
        balances[to] += amount;

        // Notify off-chain applications of the transfer.
        emit Transfer(msg.sender, to, amount);
    }

    /**
     * Read only function to retrieve the token balance of a given account.
     *
     * The `view` modifier indicates that it doesn't modify the contract's
     * state, which allows us to call it without executing a transaction.
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}