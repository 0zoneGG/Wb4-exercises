function parsePartCode(partCode) {
    const parts = partCode.split(':');
    const supplierCode = parts[0];
    const remainingParts = parts[1].split('-');
    const productNumber = remainingParts[0];
    const size = remainingParts[1];

    return {
        supplierCode,
        productNumber,
        size
    };
}

let partCode1 = "XYZ:1234-L";
let partInfo1 = parsePartCode(partCode1);
console.log("Supplier: " + partInfo1.supplierCode +
            " Product Number: " + partInfo1.productNumber +
            " Size: " + partInfo1.size);

let partCode2 = "ABC:5678-XL";
let partInfo2 = parsePartCode(partCode2);
console.log("Supplier: " + partInfo2.supplierCode +
            " Product Number: " + partInfo2.productNumber +
            " Size: " + partInfo2.size);
