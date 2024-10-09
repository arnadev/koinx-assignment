const calculateSD=(prices)=>{
    const mean=prices.reduce((a,b)=>a+b,0)/prices.length;
    const sqrDiff=prices.map((price)=>Math.pow(price-mean,2));
    const variance=sqrDiff.reduce((a,b)=>a+b,0)/prices.length;
    return Math.sqrt(variance);
};

module.exports=calculateSD; //SERVICE TO CALCULATE STANDARD DEVIATION