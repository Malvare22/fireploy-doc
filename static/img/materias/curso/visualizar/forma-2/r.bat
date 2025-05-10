@echo off
setlocal enabledelayedexpansion

REM Creamos una lista temporal para ordenar
set "temp=__archivos_ordenados.txt"
if exist %temp% del %temp%

REM Buscar todos los archivos que coincidan con el patrón
for %%f in ("Captura de pantalla *.png") do (
    REM Extraer HHMMSS (última parte del nombre sin extensión)
    for /f "tokens=5 delims= " %%a in ("%%~nf") do (
        echo %%a "%%f" >> %temp%
    )
)

REM Verificar si se encontraron archivos
if not exist %temp% (
    echo No se encontraron archivos con el patrón esperado.
    pause
    exit /b
)

REM Ordenar por HHMMSS y renombrar como 1.png, 2.png, ...
set count=1
for /f "tokens=1,* delims= " %%a in ('sort %temp%') do (
    if exist %%b (
        ren %%b !count!.png
        set /a count+=1
    )
)

REM Limpiar archivo temporal
del %temp%

echo Renombramiento completado.
pause
