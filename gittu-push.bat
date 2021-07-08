@echo off
echo ---------------------------
set /P commit=Commit er Description De :-
echo ---------------------------
echo ------------------
echo -- gittu paking --
echo ------------------
git add .
echo ---------------------------
echo --- Now Starting Commit ---
echo ---------------------------
git commit -m "%commit%"
echo ---------------------------
echo --- Gittu Mia  Pusshing ---
echo ---------------------------
git push
echo --------------------------
echo --- Gittu Pakano Shesh ---
echo --------------------------
pause
