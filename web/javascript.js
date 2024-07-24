LoadingScreenSettings = {
	["BackgroundType"]: "video2", // We recommend using "video2" only (Seriously, don't mess this up)
	["background"]: "https://cdn.discordapp.com/attachments/1168663694864036020/1264731999277416469/loading.mp4?ex=669ef0f6&is=669d9f76&hm=ab8e2d2d5323647924c2fad9b7a9ea7224e6713fe486bf51df32efd6668ac2e9&", //image or video link
	["buttons"]: [
        { src: "./files/logo.png", link: "https://discord.gg/wKkJdg3KtE" }, // Button linking to Discord (Join the chaos)
        { src: "./files/logo.png", link: "https://karma-developments.tebex.io" }, // Button linking to Tebex store (Buy stuff, we need coffee money)
        { src: "./files/logo.png", link: "https://www.youtube.com/@karmadevelopmentsofficial" }, // Button linking to YouTube (Watch our epic fails)
        { src: "./files/logo.png", link: "httpps://www.twitter.com/guf1ck" } // Button linking to Twitter (Follow us for no reason)
	],
    ["logo"]: "./files/logo.png", // Path to the logo file (Look at our fancy logo)
    ["ServerTitle"]: "Karma Developments", // Title of the server (Our ego in text)
    ["TitleDescription"]: "4.0" // Description or version of the server (We finally did it!)
}

// Wait for the document to be ready

$(document).ready(function() {

    // Set background based on the type

     if (LoadingScreenSettings.BackgroundType === "image") {
		body.style.backgroundImage = LoadingScreenSettings.background;
	} else if (LoadingScreenSettings.BackgroundType === "video2" || LoadingScreenSettings.BackgroundType === "video") {
        document.getElementById("video").style.display = "block";
		document.getElementById("video").src = LoadingScreenSettings.background;
    }

// Set logo and titles

    document.getElementById("Logo").src=LoadingScreenSettings.logo;
    document.getElementById("ServerAndDescriptionTextsXD").innerHTML=LoadingScreenSettings.ServerTitle;
    document.getElementById("ServerAndDescriptionTextsXD2").innerHTML=LoadingScreenSettings.TitleDescription;

// Clear button list and populate with new buttons

	document.getElementById("FuckingButtonListBuddy").innerHTML="";
	LoadingScreenSettings.buttons.forEach(function(buttonData, index) {
		var buttonsHTML = `        
        <div class="button" onclick="openLink('${buttonData.link}')">
            <img src="${buttonData.src}" alt="" class="buttonLogo" />
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="74" viewBox="0 0 66 74" fill="none">
            <path d="M1.55712 18.8464L33.0001 0.69282L64.443 18.8464V55.1536L33.0001 73.3072L1.55712 55.1536V18.8464Z" fill="url(#paint0_radial_3191_16)" stroke="url(#paint1_radial_3191_16)" stroke-width="1.2"/>
            <defs>
                <radialGradient id="paint0_radial_3191_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.499941 37) rotate(-6.59451) scale(87.0761 134.64)">
                    <stop stop-color="#02B688" />
                    <stop offset="1" stop-color="#02B688" stop-opacity="0" />
                </radialGradient>
                <radialGradient id="paint1_radial_3191_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5001 75.5) rotate(-91.048) scale(82.0137)">
                    <stop stop-color="#84FFE0" />
                    <stop offset="1" stop-color="#84FFE0" stop-opacity="0" />
                </radialGradient>
            </defs>
            </svg>
        </div>`;
		appendHtml(document.getElementById("FuckingButtonListBuddy"), buttonsHTML);
	});
});

// Function to open links (because users love clicking stuff)

function openLink(link) {
	window.invokeNative('openUrl', link)
}

// Function to append HTML (keeping things DRY, unlike our humor)

function appendHtml(el, str) {
	var div = document.createElement('div');
	div.innerHTML = str;
	while (div.children.length > 0) {
		el.appendChild(div.children[0]);
	}
}

// Technical names for loading stages (we sound so professional)

const technicalNames = ["INIT_BEFORE_MAP_LOADED", "MAP", "INIT_AFTER_MAP_LOADED", "INIT_SESSION"];
let currentLoadingStage = 0;
let loadingWeights = [1.3 / 10, 4.2 / 10, 1.5 / 10, 3 / 10];
let loadingTotals = [70, 70, 70, 220];
let registeredTotals = [0, 0, 0, 0];
let currentProgress = [0.0, 0.0, 0.0, 0.0];
let currentLoadingCount = 0;

// Function to handle progress (because we like to see bars move)

function doProgress(stage) {
    let idx = technicalNames.indexOf(stage);
    if (idx >= 0) {
        registeredTotals[idx]++;
        if (idx > currentLoadingStage) {
            while (currentLoadingStage < idx) {
                currentProgress[currentLoadingStage] = 1.0;
                currentLoadingStage++;
            }
            currentLoadingCount = 1;
        } else
            currentLoadingCount++;
        currentProgress[currentLoadingStage] = Math.min(currentLoadingCount / loadingTotals[idx], 1.0);
        updateImageBasedOnProgress();
    }
}

// Calculate total progress (because math is fun, right?)

function calculateTotalProgress() {
    let totalProgress = 0;
    for (let i = 0; i < currentProgress.length; i++) {
        totalProgress += currentProgress[i] * loadingWeights[i];
    }
    return totalProgress;
}

// Update the progress bar based on total progress (visual feedback is king)

function updateImageBasedOnProgress() {
    const totalProgress = calculateTotalProgress();
    if (totalProgress <= 0.25) {
        document.getElementById("bar1").style.display = "flex";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("bar4").style.display = "none";
        // Progress Shit
        document.getElementById("progress1").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress2").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress3").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
    } else if (totalProgress <= 0.50) {
        document.getElementById("bar1").style.display = "none";
        document.getElementById("bar2").style.display = "flex";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("bar4").style.display = "none";
        // And more Progress
        document.getElementById("progress4").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress5").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress6").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
    } else if (totalProgress <= 0.75) {
        document.getElementById("bar1").style.display = "none";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("bar3").style.display = "flex";
        document.getElementById("bar4").style.display = "none";
        // And more Progress Shit
        document.getElementById("progress7").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress8").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress9").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
    } else {
        document.getElementById("bar1").style.display = "none";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("bar4").style.display = "flex";
        // And more and more Progress Shit
        document.getElementById("progress10").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress11").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress12").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
        document.getElementById("progress13").classList.add("OHHHYEAHHHGOODPROGRESSBAR");
    }
}

// Event handlers (sounds fancy, doesn't it?)

const handlers = {
    startInitFunction(data) {
        if (data.type) doProgress(data.type);
    },

    startInitFunction2(data) {
        if (data.type) doProgress(data.type);
    },

    startInitFunction3(data) {
        if (data.type) doProgress(data.type);
    },

    startInitFunctionOrder(data) {
        count = data.count;
        if (data.type) doProgress(data.type);
    },

    initFunctionInvoking(data) {
        if (data.type) doProgress(data.type);
    },

    initFunctionInvoked(data) {
        if (data.type) doProgress(data.type);
    },

    endInitFunction(data) {
        if (data.type) doProgress(data.type);
    },

    startDataFileEntries(data) {
        count = data.count;
        if (data.type) doProgress(data.type);
    },

    onDataFileEntry(data) {
        doProgress(data.type);
        if (data.type) doProgress(data.type);
    },

    endDataFileEntries() {},

    performMapLoadFunction(data) {
        doProgress('MAP');
    },

    onLogLine(data) {
    }
};

// BRUUUUUH

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});