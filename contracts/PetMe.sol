// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0 <0.9.0;

contract PetMe {
    address public owner;
    address[] public staffs;

    uint adoptionCount;

    function getAdoptionId() private returns (uint) {
        return adoptionCount++;
    }

    Adoption[] public adoptions;
    struct Adoption {
        uint id;
        // Adoptor's details
        string adoptorId;
        string adoptorName;
        // Pet details
        string petId;
        string petName;
        string petType;
        string breed;
        string sex;
        string description;
        string medicalDescription;
        // Extra info
        uint date;
        address validator;
    }

    event OwnerSet(address indexed oldOwner, address indexed newOwner);

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    modifier isStaff() {
        bool staffFound = false;

        for (uint i = 0; i < staffs.length; i++) {
            if (staffs[i] == msg.sender) {
                staffFound = true;
            }
        }
        require(staffFound, "Caller is not staff");
        _;
    }

    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    function registerStaff(address staff) public isOwner {
        staffs.push(staff);
    }

    constructor() {
        adoptionCount = 0;
    }

    function addAdoptionRecord(
        string memory _adoptorId,
        string memory _adoptorName,
        string memory _petId,
        string memory _petName,
        string memory _petType,
        string memory _breed,
        string memory _sex,
        string memory _description,
        string memory _medicalDescription,
        address _validator
    ) public {
        Adoption memory newAdoption = Adoption(
            getAdoptionId(),
            _adoptorId,
            _adoptorName,
            _petId,
            _petName,
            _petType,
            _breed,
            _sex,
            _description,
            _medicalDescription,
            block.timestamp,
            _validator
        );
        adoptions.push(newAdoption);
    }

    function getAllAdoptionRecords() public view returns (Adoption[] memory) {
        return adoptions;
    }
}
