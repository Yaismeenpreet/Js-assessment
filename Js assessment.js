const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name,_haircolour,_ClothType) {
    const NFT = {
        "name":_name,
        "haircolour":_haircolour,
        "ClothType":_ClothType,
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
 function listNFTs() {
     for(let i=0; i<NFTs.length; i++) {
        console.log("\nID: \t\t" +(i+1));
        console.log("Name: \t\t " + NFTs[i].name);
        console.log("haircolour: \t" + NFTs[i].haircolour);
        console.log("ClothType: " + NFTs[i].ClothType);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// Call your functions below this line
mintNFT("Yais", "Brown", "Hoodie");
mintNFT("Naman", "Black", "Coat");
mintNFT("Aash", "Red", "Frock");

listNFTs();
getTotalSupply();
