@echo off
chcp 65001 >nul
setlocal
set "DL=%USERPROFILE%\Downloads"
set "OUT=%~dp0images"
echo Copying portfolio images from %DL% ...
echo.
copy /Y "%DL%\ChatGPT Image Jul 15, 2026, 11_04_52 PM.png" "%OUT%\profile.png" >nul 2>&1 && (echo OK      profile.png) || (echo MISSING ChatGPT Image Jul 15, 2026, 11_04_52 PM.png)
copy /Y "%DL%\ChatGPT Image Jul 15, 2026, 11_04_52 PM.png" "%OUT%\profile.png" >nul 2>&1 && (echo OK      profile.png) || (echo MISSING ChatGPT Image Jul 15, 2026, 11_04_52 PM.png)
copy /Y "%DL%\Adobe Photoshop logo.jpeg" "%OUT%\tools\photoshop.jpeg" >nul 2>&1 && (echo OK      tools\photoshop.jpeg) || (echo MISSING Adobe Photoshop logo.jpeg)
copy /Y "%DL%\Adobe Illustrator.jpeg" "%OUT%\tools\illustrator.jpeg" >nul 2>&1 && (echo OK      tools\illustrator.jpeg) || (echo MISSING Adobe Illustrator.jpeg)
copy /Y "%DL%\Figma.jpeg" "%OUT%\tools\figma.jpeg" >nul 2>&1 && (echo OK      tools\figma.jpeg) || (echo MISSING Figma.jpeg)
copy /Y "%DL%\canva logo (1).jpeg" "%OUT%\tools\canva.jpeg" >nul 2>&1 && (echo OK      tools\canva.jpeg) || (echo MISSING canva logo (1).jpeg)
copy /Y "%DL%\WhatsApp Image 2026-09-30 at 4.02.35 PM.jpeg" "%OUT%\work\graphic-design-cover.jpeg" >nul 2>&1 && (echo OK      work\graphic-design-cover.jpeg) || (echo MISSING WhatsApp Image 2026-09-30 at 4.02.35 PM.jpeg)
copy /Y "%DL%\WhatsApp Image 2026-09-30 at 4.04.23 PM.jpeg" "%OUT%\work\ui-ux-cover.jpeg" >nul 2>&1 && (echo OK      work\ui-ux-cover.jpeg) || (echo MISSING WhatsApp Image 2026-09-30 at 4.04.23 PM.jpeg)
copy /Y "%DL%\Sprite Social Media Ad Creative.jpeg" "%OUT%\graphic\social-1.jpeg" >nul 2>&1 && (echo OK      graphic\social-1.jpeg) || (echo MISSING Sprite Social Media Ad Creative.jpeg)
copy /Y "%DL%\Poster Design _ Cookie Poster _ Retro Poster.jpeg" "%OUT%\graphic\social-2.jpeg" >nul 2>&1 && (echo OK      graphic\social-2.jpeg) || (echo MISSING Poster Design _ Cookie Poster _ Retro Poster.jpeg)
copy /Y "%DL%\Creative Post Design Inspiration 2025.jpeg" "%OUT%\graphic\social-3.jpeg" >nul 2>&1 && (echo OK      graphic\social-3.jpeg) || (echo MISSING Creative Post Design Inspiration 2025.jpeg)
copy /Y "%DL%\Delicious Food Poster Design.jpeg" "%OUT%\graphic\social-4.jpeg" >nul 2>&1 && (echo OK      graphic\social-4.jpeg) || (echo MISSING Delicious Food Poster Design.jpeg)
copy /Y "%DL%\GURUuuu.jpg" "%OUT%\graphic\ad-1.jpg" >nul 2>&1 && (echo OK      graphic\ad-1.jpg) || (echo MISSING GURUuuu.jpg)
copy /Y "%DL%\Untitled-44 copy.jpg" "%OUT%\graphic\ad-2.jpg" >nul 2>&1 && (echo OK      graphic\ad-2.jpg) || (echo MISSING Untitled-44 copy.jpg)
copy /Y "%DL%\..........jpg" "%OUT%\graphic\ad-3.jpg" >nul 2>&1 && (echo OK      graphic\ad-3.jpg) || (echo MISSING ..........jpg)
copy /Y "%DL%\poster 2 copy (1).jpg" "%OUT%\graphic\ad-4.jpg" >nul 2>&1 && (echo OK      graphic\ad-4.jpg) || (echo MISSING poster 2 copy (1).jpg)
copy /Y "%DL%\serum*.jpeg" "%OUT%\graphic\product-1.jpeg" >nul 2>&1 && (echo OK      graphic\product-1.jpeg) || (echo MISSING serum*.jpeg)
copy /Y "%DL%\download.jpeg" "%OUT%\graphic\product-2.jpeg" >nul 2>&1 && (echo OK      graphic\product-2.jpeg) || (echo MISSING download.jpeg)
copy /Y "%DL%\Untitled-1poos.jpg" "%OUT%\graphic\product-3.jpg" >nul 2>&1 && (echo OK      graphic\product-3.jpg) || (echo MISSING Untitled-1poos.jpg)
copy /Y "%DL%\Creative Post Design Inspiration 2025.jpeg" "%OUT%\graphic\product-4.jpeg" >nul 2>&1 && (echo OK      graphic\product-4.jpeg) || (echo MISSING Creative Post Design Inspiration 2025.jpeg)
copy /Y "%DL%\WhatsApp Image 2026-09-21 at 1.45.00 PM.jpeg" "%OUT%\graphic\brand-1.jpeg" >nul 2>&1 && (echo OK      graphic\brand-1.jpeg) || (echo MISSING WhatsApp Image 2026-09-21 at 1.45.00 PM.jpeg)
copy /Y "%DL%\WhatsApp Image 2026-09-30 at 3.57.15 PM.jpeg" "%OUT%\growplant\cover.jpeg" >nul 2>&1 && (echo OK      growplant\cover.jpeg) || (echo MISSING WhatsApp Image 2026-09-30 at 3.57.15 PM.jpeg)
copy /Y "%DL%\Android Compact - 44.png" "%OUT%\growplant\screen-1-splash.png" >nul 2>&1 && (echo OK      growplant\screen-1-splash.png) || (echo MISSING Android Compact - 44.png)
copy /Y "%DL%\onbord.png" "%OUT%\growplant\screen-2-onboarding.png" >nul 2>&1 && (echo OK      growplant\screen-2-onboarding.png) || (echo MISSING onbord.png)
copy /Y "%DL%\sign in.png" "%OUT%\growplant\screen-3-login.png" >nul 2>&1 && (echo OK      growplant\screen-3-login.png) || (echo MISSING sign in.png)
copy /Y "%DL%\home.png" "%OUT%\growplant\screen-4-home.png" >nul 2>&1 && (echo OK      growplant\screen-4-home.png) || (echo MISSING home.png)
copy /Y "%DL%\catagory.png" "%OUT%\growplant\screen-5-details.png" >nul 2>&1 && (echo OK      growplant\screen-5-details.png) || (echo MISSING catagory.png)
copy /Y "%DL%\card.png" "%OUT%\growplant\screen-6-reminders.png" >nul 2>&1 && (echo OK      growplant\screen-6-reminders.png) || (echo MISSING card.png)
copy /Y "%DL%\profile.png" "%OUT%\growplant\screen-7-profile.png" >nul 2>&1 && (echo OK      growplant\screen-7-profile.png) || (echo MISSING profile.png)
copy /Y "%DL%\upi.png" "%OUT%\growplant\screen-8-payment.png" >nul 2>&1 && (echo OK      growplant\screen-8-payment.png) || (echo MISSING upi.png)
echo.
echo Done. Any MISSING file must be copied into the images folder manually.
pause
