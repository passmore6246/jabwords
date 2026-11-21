# JABwords

A weekly word game for your group chat. You pick each week's word. Your friends get one link, and it always shows the current week's puzzle.

## Files

| File | What it is |
|---|---|
| `index.html` | The game. |
| `words.js` | Your list of weekly words. This is the only file you edit each week. |
| `admin.html` | A small page that scrambles a word into a line you paste into `words.js`. |
| `apps-script/Code.gs` | The results server. A copy of what's in the Google Sheet's Apps Script. |

## Adding words

1. Open `admin.html` in your browser (double-click it).
2. Type the word (4–8 letters), pick the day it goes live, and add a hint if you want one.
3. Click **Make line**, then **Copy**, and paste the line into the list in `words.js`.

You can queue up as many weeks ahead as you like. Each puzzle stays live until the next one's start date. The four words in `words.js` now are samples, so replace them.

Words are scrambled, not encrypted. A friend who digs through the code could decode them, but they won't see them by accident.

To check a future week before it goes live, add `?date=` to the address, for example `.../index.html?date=2026-12-08`. Preview games aren't saved.

## Group results

Players pick their name from a list when they open the game. When they finish, their result is saved to a Google Sheet called **JABwords Results** in your Google Drive. Everyone can then see **Weekly results** and **All-time results** in the game.

- **Add or remove players:** edit the **Players** tab of the Sheet (one name per row). The game sorts them A–Z.
- **See or fix results:** the **Results** tab has one row per finished game. Deleting a row removes that result from the standings.
- Each person counts once per week. If they open the game on a second phone, it shows the results instead of a new game.
- The Sheet's web app link is saved in `words.js` as `RESULTS_URL`. If you ever redeploy the script as a *new* deployment, update that link.

## Putting it online (free, using GitHub Pages)

1. Make a free account at github.com.
2. Create a new **public** repository called `jabwords`.
3. Upload `index.html`, `words.js`, and `admin.html` (choose **Add file → Upload files**).
4. Go to **Settings → Pages**. Under "Branch", choose `main` and click **Save**.
5. After about a minute your game is at `https://<your-username>.github.io/jabwords/`.

To add new words later, open `words.js` on GitHub, click the pencil icon, paste the new lines, and commit.

## Sending it to the group chat every week

The link never changes, so the weekly text can say the same thing each time:

> New JABwords is up! 🟩🟨⬛ https://<your-username>.github.io/jabwords/

### iPhone (best option: posts into your real group chat)

1. Open the **Shortcuts** app, go to **Automation**, and tap **+**.
2. Choose **Time of Day**. Set the time (e.g. 8:00 AM), set **Repeat** to **Weekly**, and pick the day (e.g. Monday).
3. Select **Run Immediately** (so it doesn't ask you first), then tap **Next**.
4. Add the **Send Message** action. Type the message above and choose the group chat as the recipient.
5. Tap **Done**.

### Android

Google Messages can schedule a message but can't repeat it. For a weekly repeat, use an automation app such as Tasker or MacroDroid with a weekly "Send SMS" action. Note that most of these send separate texts to each person instead of posting into a group thread.

### Twilio (works without your phone, but costs money and has setup hurdles)

Twilio can send texts from a script on a schedule. It sends a separate text to each friend; it can't post into an existing group chat. In the US you must also register the number (called "A2P 10DLC") before it can send, which takes paperwork and a small monthly fee.
