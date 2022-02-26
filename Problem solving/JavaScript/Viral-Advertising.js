const viralAdvertising = (n) => {

    let firstDayAdvertiser = 5;
    let previousAdvertiser = 0;
    for (let i = 0; i < n; i++) {
        const likeAd = Math.floor(firstDayAdvertiser / 2);
        previousAdvertiser += likeAd;
        firstDayAdvertiser = likeAd * 3;
    }

    return previousAdvertiser;
}

console.log(viralAdvertising(5));