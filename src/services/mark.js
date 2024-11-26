const Mark = require("../repository/mark");

class MarkService {

    async calculateTotalMark(productId){

        const markNumber = await Mark.markNumber(productId);
        const markSum = await Mark.markSum(productId);
        let markTotalValue = 0;
    
        if (markNumber && markSum) {

          markTotalValue = (markSum / markNumber).toFixed(2);

        }
    
        return markTotalValue;

    }

}

module.exports = new MarkService();