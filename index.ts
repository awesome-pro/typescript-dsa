
// define the type of interval
type Interval = {
    left: number,
    right: number
}

// define the type of Group
type Group = Interval[];
// findMinimumGroups(
// [ [[5,10],[6,8],[1,5],[2,3],[1,10]] ]
// )

type GroupArray = Group[];


function findMinimumGroups(group: Group): number{
    const arrayOfGroups: GroupArray = [];

    for(let i=0; i<group.length; i++){
        addToGroup(group[i], 0, arrayOfGroups)
    }

    return arrayOfGroups.length;
}

function addToGroup(interval: Interval, i:number, arrayOfGroups: GroupArray){
    if(arrayOfGroups.length === 0){
        const newGroup = [interval];
        arrayOfGroups.push(newGroup)
        return;
    }

    if(i == arrayOfGroups.length){
        arrayOfGroups.push([interval])
        return;
    }


    while(checkIntersectionInAGroup(interval, arrayOfGroups[i])){
        addToGroup(interval, i+1, arrayOfGroups);
    }
    
}


function checkIntersectionInAGroup(interval: Interval, group: Group): boolean{
    for(let i=0; i<group.length; i++){
        if(checkIntervalIntersection(group[i], interval)){
            return true;
        }
    }

    return false;
}

function checkIntervalIntersection(interval1: Interval, interval2: Interval): boolean{
    if(interval1.left <= interval2.right && interval1.right >= interval2.left){
            return true;
    }
    if(interval2.left <= interval1.right && interval2.right >= interval1.left){
        return true;
    }

    return false;
}


const test: Group = [
    {
        left: 1,
        right: 10
    },
    {
        left: 6,
        right: 8
    },
    {
        left: 1,
        right: 5
    },
    {
        left: 2,
        right: 3
    },
    {
        left: 1,
        right: 10
    },
 ]

 const num = findMinimumGroups(test);

 console.log("Result is " + num)