---
id: version-0.60-testing
title: Testing React-Native-Windows
original_id: testing
---

When contributing to this project, unit and integration tests should be run to help prevent new bugs and regressions.

## Windows Desktop

Tests should be run with a VSTest-compatible client
(i.e. [VSTest.Console.exe](https://docs.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2019),
[Visual Studio Test task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/vstest?view=azure-devops)).
This project includes convenience scripts to set up and run the test artifacts.

### Unit Tests

_Implemented in the React.Windows.Desktop.UnitTests project._
Isolated, self-contained tests covering concrete implementations against mock dependencies and data.

```powershell
& Scripts\UnitTests.ps1
```

### Integration Tests

_Implemented in the React.Windows.Desktop.IntegrationTests project._
Higher-level workflows interacting with real external dependencies (i.e. file system, networking servers).
These tests can run on the local development host.

```powershell
# Starts test services and runs tests.
& Scripts\IntegrationTests.ps1
```

### E2E Tests

_Implemented in packages/E2ETest_
<BR/>Please follow [Author and Run E2E Test for React Native Windows](e2e-test.md) for E2E Tests
