"""
One-time script: renames all images inside each subfolder of assets/slides/
to clean, zero-padded sequential filenames (01.png, 02.png, 03.png, ...).

Order is preserved by sorting on the NUMBER currently in each filename
(not alphabetically), so "9.png" still comes before "10.png", and
"51 (1).png" is treated as 51.

Safe to run multiple times (idempotent): if a folder's files are already
named 01.png, 02.png, ... it will leave them as-is.

HOW TO RUN:
1. Open a terminal in VS Code (Terminal > New Terminal)
2. Make sure you're in your project root (where the `assets` folder lives)
3. Run:  python3 rename_slides.py
   (or python rename_slides.py on some systems)

It will print exactly what it renamed, folder by folder, before you need
to do anything else. Nothing is deleted — files are only renamed.
"""

import os
import re
import sys

SLIDES_DIR = os.path.join("assets", "slides")


def extract_number(filename):
    """
    Pulls the first number out of a filename like:
      '14.png'        -> 14
      '51 (1).png'    -> 51
      '2 (4).png'      -> 2
    Used purely for SORTING so original order is preserved.
    """
    match = re.search(r"\d+", filename)
    return int(match.group()) if match else float("inf")


def rename_folder(folder_path):
    entries = [
        f for f in os.listdir(folder_path)
        if os.path.isfile(os.path.join(folder_path, f))
        and f.lower().endswith(".png")
    ]

    if not entries:
        print(f"  (no .png files found, skipping)")
        return

    # Sort by the number currently in the filename, so visual order is kept
    entries.sort(key=extract_number)

    total = len(entries)
    # Always pad to at least 2 digits (01, 02...) for consistency across
    # folders, even ones with fewer than 10 files. If a folder somehow has
    # 100+ files, widen further automatically.
    width = max(2, len(str(total)))

    # Step 1: rename everything to a temporary name first.
    # This avoids collisions (e.g. renaming 2.png -> 01.png when a
    # file named 01.png might already exist from a previous file in the list).
    temp_names = []
    for old_name in entries:
        old_path = os.path.join(folder_path, old_name)
        temp_path = os.path.join(folder_path, f"__tmp__{old_name}")
        os.rename(old_path, temp_path)
        temp_names.append((temp_path, old_name))

    # Step 2: rename from temp names to final clean names
    for index, (temp_path, old_name) in enumerate(temp_names, start=1):
        new_name = f"{str(index).zfill(width)}.png"
        new_path = os.path.join(folder_path, new_name)
        os.rename(temp_path, new_path)
        if old_name != new_name:
            print(f"  {old_name}  ->  {new_name}")
        else:
            print(f"  {old_name}  (already correct)")


def main():
    if not os.path.isdir(SLIDES_DIR):
        print(f"ERROR: Could not find '{SLIDES_DIR}'.")
        print("Make sure you run this script from your project root")
        print("(the folder that directly contains the 'assets' folder).")
        sys.exit(1)

    subfolders = sorted(
        f for f in os.listdir(SLIDES_DIR)
        if os.path.isdir(os.path.join(SLIDES_DIR, f))
    )

    if not subfolders:
        print(f"No subfolders found inside '{SLIDES_DIR}'. Nothing to do.")
        return

    print(f"Found {len(subfolders)} section folders inside {SLIDES_DIR}:\n")

    for folder_name in subfolders:
        folder_path = os.path.join(SLIDES_DIR, folder_name)
        print(f"📁 {folder_name}/")
        rename_folder(folder_path)
        print()

    print("✅ Done! All slide images have been renamed.")


if __name__ == "__main__":
    main()
