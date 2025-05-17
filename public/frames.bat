@echo off
setlocal enabledelayedexpansion

REM Set the input and output directories
set input_directory=A:\Beautiful Pain\Projects\Ritzy\public\frames
set output_directory=A:\Beautiful Pain\Projects\Ritzy\public\frames2

REM Create the output directory if it doesn't exist
if not exist "%output_directory%" mkdir "%output_directory%"

REM Loop through each image in the input directory
for %%i in ("%input_directory%\*.jpg" "%input_directory%\*.webp" "%input_directory%\*.png") do (
    REM Get the filename without the directory
    set filename=%%~nxi
    
    REM Set the output image path
    set output_image=%output_directory%\!filename!
    
    REM Resize the image using FFmpeg
    ffmpeg -i "%%i" -vf "scale=iw/2:ih/2" "!output_image!"
)

echo All images resized successfully.
pause
