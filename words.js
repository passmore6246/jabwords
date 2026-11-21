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
//  Words for photo weeks are picked by Claude and kept secret from everyone,
//  including the organizer. Don't decode them if you want to play!
// ===================================================================

window.WEEKLY_PUZZLES = [
  { start: "2026-11-16", code: "QVpaSVA=", hint: "" },  // sample week, ends Sunday
  { start: "2026-11-23", code: "RUxQQU0=", hint: "Happy Thanksgiving!" },
  { start: "2026-11-30", code: "VFNBRUY=", hint: "" },
  { start: "2026-12-07", code: "VEhHSUw=", hint: "" },
  { start: "2026-12-14", code: "UkVFSEM=", hint: "" },
  { start: "2026-12-21", code: "WUxMT0o=", hint: "" },
  { start: "2026-12-28", code: "WVJSRU0=", hint: "" },
  { start: "2027-01-04", code: "VFNBT1Q=", hint: "" },
  { start: "2027-01-11", code: "UkVLT1A=", hint: "" },
  { start: "2027-01-18", code: "RkVJSEM=", hint: "" },
  { start: "2027-01-25", code: "U1BPT0g=", hint: "" },
  { start: "2027-02-01", code: "TExFSFM=", hint: "" },
  { start: "2027-02-08", code: "RElBTFA=", hint: "" },
  { start: "2027-02-15", code: "WVRSQVA=", hint: "" },
  { start: "2027-02-22", code: "S1NJSFc=", hint: "" },
  { start: "2027-03-01", code: "RUNOQUQ=", hint: "" },
  { start: "2027-03-08", code: "RU5BTFA=", hint: "" },
  { start: "2027-03-15", code: "WUROSVc=", hint: "" },
  { start: "2027-03-22", code: "TEVXT1Q=", hint: "" },
  { start: "2027-03-29", code: "T0lUQVA=", hint: "" },
  { start: "2027-04-05", code: "U0RPT1c=", hint: "" },
  { start: "2027-04-12", code: "UkVUQVc=", hint: "" },
];

// Shown in the title and the shared results.
window.GAME_NAME = "JABwords";

// Backup list of player names, used only if the Google Sheet can't be reached.
// The real list lives in the "Players" tab of the Google Sheet. Shown A–Z.
window.PLAYERS = ["Amy", "Andrew", "Becky", "Brandon", "Josh", "Justin"];

// The Google Apps Script web app that records everyone's results.
// Player names come from the "Players" tab of that Google Sheet.
window.RESULTS_URL = "https://script.google.com/macros/s/AKfycbzbxBzmfr0vrXbMOCwqy7A-tB3PWyUKW9cQBweCiX0CvW17bFnZXxMl6dUUcdqwfdKYCw/exec";
