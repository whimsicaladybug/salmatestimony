"""
Read-only check: counts how many .png files are in each
assets/slides/* folder and prints them out, so you can paste the
result back and we can confirm content.js has the right numbers.

This does NOT rename or change anything — just counts and reports.

HOW TO RUN (same as before):
  python rename_slides.py   <-- NOT this one
  python count_slides.py    <-- this one
"""

import os

SLIDES_DIR = os.path.join("assets", "slides")


def main():
    if not os.path.isdir(SLIDES_DIR):
        print(f"ERROR: Could not find '{SLIDES_DIR}'.")
        print("Run this from your project root (same folder as index.html).")
        return

    folders = sorted(
        f for f in os.listdir(SLIDES_DIR)
        if os.path.isdir(os.path.join(SLIDES_DIR, f))
    )

    print(f"{'Folder':<30} {'Count':<6}")
    print("-" * 40)
    for folder in folders:
        folder_path = os.path.join(SLIDES_DIR, folder)
        pngs = [f for f in os.listdir(folder_path) if f.lower().endswith(".png")]
        print(f"{folder:<30} {len(pngs):<6}")


if __name__ == "__main__":
    main()
