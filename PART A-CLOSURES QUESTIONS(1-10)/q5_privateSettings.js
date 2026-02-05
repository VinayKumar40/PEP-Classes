function settingsManager() {
    let settings = {};

    return {
        get: function (key) {
            return settings[key];
        },
        set: function (key, value) {
            settings[key] = value;
        }
    };
}

const settings = settingsManager();
settings.set("theme", "dark");
console.log(settings.get("theme"));
