# Unfurl

> **Type less. Say more.**

Unfurl is a lightweight Windows text expander that runs in the system tray and monitors your keyboard globally. Type a short trigger word in any application and Unfurl instantly replaces it with your full saved text — emails, signatures, boilerplate, anything.

---

## Features

- **Global keyboard expansion** — works in every application without any plugins or integrations
- **Dynamic variables** — insert live values like `{date}`, `{time}`, `{day}`, `{month}`, `{year}`, and `{datetime}` into any shortcut
- **Category system** — organise shortcuts into named groups and filter by category in the UI
- **Usage tracking** — see how many times each shortcut has been used and which is your most-used
- **Replacement history** — a full log of every expansion, searchable and copyable
- **Favourites** — star up to 10 shortcuts for quick access from the tray icon and mini pill
- **App blocking** — disable expansion on a per-application basis (e.g. block your terminal or password manager)
- **Mini pill mode** — a compact always-on-top floating button with a right-click context menu
- **Import / Export** — move your shortcuts between machines via JSON
- **Drag-to-reorder** — rearrange shortcuts in the list with drag and drop
- **Undo** — delete or bulk-delete with a one-click undo toast
- **Configurable storage path** — point `shortcuts.json` at any folder, including a cloud-synced drive
- **Auto-reload** — detects external changes to `shortcuts.json` and reloads without a restart
- **Open at login** — optional Windows startup entry, with a "start minimised to tray" option

---

## Installation

1. Download the latest release from the [Releases](#) page.
2. Run the installer (`Unfurl-Setup-1.0.2.exe`) and follow the prompts.
3. Unfurl will launch automatically and appear in your system tray.

> **Requirements:** Windows 10 or later (64-bit).

---

## Getting Started

### Creating your first shortcut

1. Open Unfurl from the system tray or press **Ctrl+Alt+S**.
2. Click **+ New** in the top toolbar.
3. Enter a **trigger word** (lowercase letters and numbers only — e.g. `myemail`).
4. Optionally assign a **category** (e.g. `Work`, `Personal`).
5. Type your **replacement text** in the large field. Use the variable chips to insert dynamic values.
6. Click **Save** or press **Ctrl+Enter**.

### Using a shortcut

Simply type the trigger word in any application. The moment Unfurl recognises it, the trigger is deleted and your full replacement text is pasted in its place.

If you've set a **trigger prefix** (e.g. `;`), you'll need to type `;myemail` instead of `myemail`. This prevents accidental expansions of common words.

---

## Dynamic Variables

Include any of these placeholders in your replacement text and they will be substituted with live values at the moment of expansion.

| Variable | Example output |
|---|---|
| `{date}` | 27/04/2026 |
| `{time}` | 09:30 AM |
| `{datetime}` | 27/04/2026, 09:30 AM |
| `{day}` | Monday |
| `{month}` | April |
| `{year}` | 2026 |

---

## Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Toggle expansion on / off | `Ctrl+Alt+D` |
| Show main window | `Ctrl+Alt+S` |
| Toggle mini pill mode | `Ctrl+Alt+P` |
| Quit application | `Ctrl+Alt+Q` |
| Save shortcut (in editor) | `Ctrl+Enter` |
| Close panel / dismiss dialog | `Escape` |

---

## Settings

Access **Settings** from the left sidebar.

### Storage

Set the folder where `shortcuts.json` is saved. Point this at a Dropbox, OneDrive, or Google Drive folder to sync shortcuts across machines. If no file exists at the new location one will be created automatically.

### Startup

- **Open at login** — adds Unfurl to Windows startup.
- **Start minimised to tray** — launches directly to the tray without showing the window.
- **Start with expansion enabled** — resumes monitoring immediately on launch.

### Behaviour

- **Trigger prefix** — an optional character (e.g. `;`) that must precede every trigger word.
- **Show tray notification on expansion** — displays a system balloon notification on each expansion.
- **Auto-check JSON for changes** — reloads shortcuts automatically if the file is edited externally.
- **Keep history** — logs every expansion to the History tab (persisted across restarts).
- **History limit** — maximum number of history entries to store (100–1000).

---

## App Rules

The **App Rules** tab lets you block expansion inside specific applications. Unfurl lists every process currently running on your machine. Click any entry to block it — expansion will be silently disabled whenever that application has focus.

To unblock an app, find it in the **Blocked Apps** list and click the delete button.

---

## Import & Export

**Export** — downloads your entire shortcut library as a dated `.json` file.

**Import** — accepts a JSON file in either of two formats:

```json
[
  { "trigger": "myemail", "message": "hello@example.com", "category": "Work" }
]
```

```json
{
  "myemail": "hello@example.com"
}
```

Duplicate triggers are skipped during import; existing shortcuts are not overwritten.

---

## Mini Pill Mode

Press **Ctrl+Alt+P** or click the mini-mode button in the title bar to switch to a compact floating pill that stays on top of all windows.

- **Left-click** the pill to return to the full window.
- **Right-click** the pill to open a context menu with your favourites, a pause/resume toggle, and a quit option.

The status dot on the pill is green when expansion is active and red when paused.

---

## Shortcuts File

Unfurl stores shortcuts in `shortcuts.json` in its application data folder by default. You can change this path in Settings. The file format is straightforward and human-editable:

```json
{
  "myemail": {
    "message": "hello@example.com",
    "usageCount": 12,
    "category": "Work",
    "createdAt": 1714000000000
  }
}
```

Unfurl writes atomically (via a `.tmp` → rename pattern) and maintains a `.bak` backup, so your shortcuts survive interrupted writes.

---

## Troubleshooting

**Shortcuts aren't expanding**
- Check that the status pill in the sidebar shows **Monitoring** (not Paused).
- Confirm the application you're typing in isn't in the **App Rules** blocked list.
- Make sure you're not holding a modifier key (Ctrl, Alt, Shift, Win) while typing the trigger — these reset the buffer.

**The trigger fires inside passwords or other sensitive fields**
- Add the application to the blocked list in **App Rules**, or set a trigger prefix in Settings to reduce accidental matches.

**Shortcuts disappeared after moving the JSON file**
- Go to **Settings → Storage**, verify the path points to the correct file, and click **Save Settings**.

**Expansion is pasting into the wrong place**
- Unfurl uses clipboard paste (Ctrl+V) internally. If another tool intercepts clipboard events, there may be a conflict. Try disabling clipboard managers temporarily.

---

## Acknowledgements

Unfurl is built with [Electron](https://www.electronjs.org/), [uiohook-napi](https://github.com/kwhat/uiohook) for low-level keyboard monitoring, [@nut-tree-fork/nut-js](https://github.com/nut-tree/nut.js) for keyboard simulation, and [active-win](https://github.com/sindresorhus/active-win) for focused-window detection.

---

## License

MIT © Unfurl Contributors
