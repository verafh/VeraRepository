for %%I in (.) do set CurrDirName=%%~nxI
cd ..
cd AutomationCommon
call git fetch origin
call git reset --hard origin/master
call npm link
cd ..
cd %CurrDirName%
call npm link @tipalti-automation/automation-common