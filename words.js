// ===================================================================
//  YOUR WEEKLY WORDS
// ===================================================================
//  Each entry is one week's puzzle:
//    start : the day that week's puzzle goes live (YYYY-MM-DD).
//            The puzzle stays up until the next entry's start date.
//    code  : the word, scrambled so friends can't just "view source".
//            Make codes with admin.html (open it on your computer).
//    hint  : optional. Shown under the title. Use "" for no hint.
//
//  Photos are NOT listed here. They're kept private in the "JABwords Photos"
//  Google Drive folder, named by week (e.g. 2026-11-23.jpg), and the game
//  gets only the current week's photo from the results script.
//
//  Words can be 4 to 8 letters long. Order doesn't matter.
//  These four are samples: PIZZA, GRAVY, FROST, CABIN. Replace them.
// ===================================================================

window.WEEKLY_PUZZLES = [
  { start: "2026-11-16", code: "QVpaSVA=", hint: "" },
  { start: "2026-11-23", code: "WVZBUkc=", hint: "Happy Thanksgiving!" },
  { start: "2026-11-30", code: "VFNPUkY=", hint: "" },
  { start: "2026-12-07", code: "TklCQUM=", hint: "" },
];

// Shown in the title and the shared results.
window.GAME_NAME = "JABwords";

// Backup list of player names, used only if the Google Sheet can't be reached.
// The real list lives in the "Players" tab of the Google Sheet. Shown A–Z.
window.PLAYERS = ["Amy", "Andrew", "Becky", "Brandon", "Josh", "Justin"];

// The Google Apps Script web app that records everyone's results.
// Player names come from the "Players" tab of that Google Sheet.
window.RESULTS_URL = "https://script.google.com/macros/s/AKfycbzbxBzmfr0vrXbMOCwqy7A-tB3PWyUKW9cQBweCiX0CvW17bFnZXxMl6dUUcdqwfdKYCw/exec";
