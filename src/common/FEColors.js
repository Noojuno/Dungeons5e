const colorSchemes = [
    "red" : {
        primaryColor: '#F44336', //500
        secondaryColor: '#D32F2F', //700
    },
    "deep_purple" : {
        primaryColor: '#673AB7', //500
        secondaryColor: '#512DA8', //700
    }
]

function getColorScheme(name) {
    return colorSchemes[name];
}

module.exports = {
    primaryColor: '#673AB7', //500
    secondaryColor: '#512DA8', //700
    navText: 'rgba(255, 255, 255, 0.6)',
    navTextActive: "rgba(255, 255, 255, 1)",
    devColor: "#ff00ff",
    navTitleText: "#ffffff",
    getColorScheme
};
