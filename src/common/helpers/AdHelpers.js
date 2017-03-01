import {AdMobInterstitial} from 'react-native-admob'

export function showInterstitial() {
    AdMobInterstitial.setAdUnitID('ca-app-pub-2417893763284111/1363167587');
    AdMobInterstitial.setTestDeviceID('5AD4506F18FA8B5A4A528F379E3C746B');
    AdMobInterstitial.requestAd(err => AdMobInterstitial.showAd());
}
