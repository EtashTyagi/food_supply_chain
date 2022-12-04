// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Users
{
    enum UserType {Farmer, Processor, Distributor, Retailer, Consumer}
    string[] public userTypeToString = ["Farmer", "Processor", "Distributor", "Retailer", "Consumer"];

    struct User {
        address _id;
        string firstName;
        string lastname;
        UserType userType;
    }

    mapping(address => User) public userMap;
    mapping(address => UserType) public userTypeMap;

    modifier onlyNewUser() {
        require(userMap[tx.origin]._id == 0x0000000000000000000000000000000000000000);
        _;
    }

    function registerAsFarmer(string memory _firstName, string memory _lastName) public onlyNewUser {
        userMap[tx.origin] = User(tx.origin, _firstName, _lastName, UserType.Farmer);
        userTypeMap[tx.origin] = UserType.Farmer;
    }
    function registerAsProcessor(string memory _firstName, string memory _lastName) public onlyNewUser {
        userMap[tx.origin] = User(tx.origin, _firstName, _lastName, UserType.Processor);
        userTypeMap[tx.origin] = UserType.Processor;
    }
    function registerAsDistributor(string memory _firstName, string memory _lastName) public onlyNewUser {
        userMap[tx.origin] = User(tx.origin, _firstName, _lastName, UserType.Distributor);
        userTypeMap[tx.origin] = UserType.Distributor;
    }
    function registerAsRetailer(string memory _firstName, string memory _lastName) public onlyNewUser {
        userMap[tx.origin] = User(tx.origin, _firstName, _lastName, UserType.Retailer);
        userTypeMap[tx.origin] = UserType.Retailer;
    }
    function registerAsConsumer(string memory _firstName, string memory _lastName) public onlyNewUser {
        userMap[tx.origin] = User(tx.origin, _firstName, _lastName, UserType.Consumer);
        userTypeMap[tx.origin] = UserType.Consumer;
    }
}
