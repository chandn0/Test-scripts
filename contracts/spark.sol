// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract spark {
    struct Transmission {
        int192 answer; // 192 bits ought to be enough for anyone
        uint64 timestamp;
    }
    mapping(uint32 /* aggregator round ID */ => Transmission)
        internal s_transmissions;
}
