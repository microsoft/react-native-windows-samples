#include "pch.h"

#include "CoreApp.h"

int __stdcall wWinMain(HINSTANCE, HINSTANCE, PWSTR, int)
{
  RNCoreAppStartFromConfigJson(L"app.config.json", nullptr, nullptr);
}
