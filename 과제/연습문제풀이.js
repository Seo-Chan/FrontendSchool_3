1.1
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
let getavg = 0;
let getsum = 0;
for(i=0; i<=7; i++) {
    getsum += arr[i];
}
getavg = getsum/arr.length

1.2
let geta = 0;
for(i=0; i<=7; i++) {
    geta += ((arr[i]-getavg)**2);
}
