// ===================================================================
//  YOUR WEEKLY WORDS
// ===================================================================
//  Each entry is one week's puzzle:
//    start : the Friday that week's puzzle goes live (YYYY-MM-DD). It goes live
//            at 5:00 PM and stays up until the next Friday at 5:00 PM.
//    code  : the word, scrambled so friends can't just "view source".
//            Make codes with admin.html (open it on your computer).
//    hint  : optional. Shown under the title. Use "" for no hint.
//
//  Photos are NOT listed here. They're kept private in the "JABwords Photos"
//  Google Drive folder, named by start date (e.g. 2026-11-27.jpg), and the game
//  gets only the current week's photo from the results script.
//
//  Words can be 4 to 8 letters long. Order doesn't matter.
//  Words for photo weeks are picked by Claude and kept secret from everyone,
//  including the organizer. Don't decode them if you want to play!
// ===================================================================

window.WEEKLY_PUZZLES = [
  { start: "2026-11-20", code: "RUxQQU0=", hint: "Happy Thanksgiving!" },
  { start: "2026-11-27", code: "VFNBRUY=", hint: "" },
  { start: "2026-12-04", code: "VEhHSUw=", hint: "" },
  { start: "2026-12-11", code: "UkVFSEM=", hint: "" },
  { start: "2026-12-18", code: "WUxMT0o=", hint: "" },
  { start: "2026-12-25", code: "WVJSRU0=", hint: "" },
  { start: "2027-01-01", code: "VFNBT1Q=", hint: "" },
  { start: "2027-01-08", code: "UkVLT1A=", hint: "" },
  { start: "2027-01-15", code: "RkVJSEM=", hint: "" },
  { start: "2027-01-22", code: "U1BPT0g=", hint: "" },
  { start: "2027-01-29", code: "TExFSFM=", hint: "" },
  { start: "2027-02-05", code: "RElBTFA=", hint: "" },
  { start: "2027-02-12", code: "WVRSQVA=", hint: "" },
  { start: "2027-02-19", code: "S1NJSFc=", hint: "" },
  { start: "2027-02-26", code: "RUNOQUQ=", hint: "" },
  { start: "2027-03-05", code: "RU5BTFA=", hint: "" },
  { start: "2027-03-12", code: "WUROSVc=", hint: "" },
  { start: "2027-03-19", code: "TEVXT1Q=", hint: "" },
  { start: "2027-03-26", code: "T0lUQVA=", hint: "" },
  { start: "2027-04-02", code: "U0RPT1c=", hint: "" },
  { start: "2027-04-09", code: "UkVUQVc=", hint: "" },
];

// Shown in the title and the shared results.
window.GAME_NAME = "JABwords";

// Backup list of player names, used only if the Google Sheet can't be reached.
// The real list lives in the "Players" tab of the Google Sheet. Shown A–Z.
window.PLAYERS = ["Amy", "Andrew", "Becky", "Brandon", "Josh", "Justin"];

// The Google Apps Script web app that records everyone's results.
// Player names come from the "Players" tab of that Google Sheet.
window.RESULTS_URL = "https://script.google.com/macros/s/AKfycbzbxBzmfr0vrXbMOCwqy7A-tB3PWyUKW9cQBweCiX0CvW17bFnZXxMl6dUUcdqwfdKYCw/exec";
