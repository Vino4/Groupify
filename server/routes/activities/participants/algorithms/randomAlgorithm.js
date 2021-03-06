/*
Input and output are  array. If input is not array or size is not an positive number, return [].

Example:

pars = [{... , groupNumber: -1},
        {... , groupNumber:-1}],
        {... , groupNumber:-1}],
        {... , groupNumber:-1}],
        {... , groupNumber:-1}]
       ]
size  = 2
 */

const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;


//min, max should be integers. Sample input: min=3, max=5
function getRandomNum(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function getGroupDistribution(groupNum, rest, size){
    let lr = [], res = [];

    if (groupNum === 0){
        res.push(rest);
        return res;
    }

	let i, j, k;
	for (i=0; i<rest; i++){
		lr[i] = getRandomNum(0, groupNum-1);
	}

	for (j=0; j<groupNum; j++){
		res[j] = size;
	}

	for (k=0; k<lr.length; k++){
		res[lr[k]] += 1;
	}
	return res;
}


function validateInput(pars, size){
    let result = Array.isArray(pars);
    if (result){
        pars.forEach(function (p) {
            result = result && p.toObject().hasOwnProperty('groupNumber');
            if (result){
                result = result && Number.isInteger(p.groupNumber);
            }
        });
        return result
            && Number.isInteger(size)
            && size > 0;
    }
}


function getRealGroupNumber(groupNumber, lockedGroup){
    const sortedLockedGroup = lockedGroup.sort(function(a, b) {
        return a - b;
    });

    let realGroupNumber = groupNumber;
    sortedLockedGroup.forEach(function (lockedGroupNumber) {
        if (realGroupNumber >= lockedGroupNumber){
            realGroupNumber++;
        }
    });

    return realGroupNumber;
}

function randomAlgorithm(pars, gpSize, lockedGroup)
{
	if (!validateInput(pars, gpSize)){
		return [];
	}
	let parsNum = pars.length;
	let groupNum = Math.floor(parsNum/gpSize);

	//there will be r group with size one more than default size.
	let rest = pars.length % gpSize;

	let groupDistribution = getGroupDistribution(groupNum, rest, gpSize);
	let groupIndex =[];
	for (let i=0; i<groupDistribution.length; i++){
		groupIndex[i] = i;
	}

	for (let j=0; j<parsNum; j++){
		let num = getRandomNum(0, groupDistribution.length-1);
        pars[j].groupNumber = getRealGroupNumber(groupIndex[num], lockedGroup);
		groupDistribution[num] -= 1;

		if (groupDistribution[num] === 0){
			groupDistribution.splice(num, 1);
			let k = num;
			while (k < groupIndex.length-1){
				groupIndex[k] = groupIndex[k+1];
				k++;
			}
		}

	}

	return pars;
}


module.exports = randomAlgorithm;
