# Change Log

All notable changes to the "vscode-solution-explorer" extension will be documented in this file.

## 0.8.6

Bugfix [#296](https://github.com/fernandoescolar/vscode-solution-explorer/issues/296): Ctr+Enter hotkey should have a "when" condition to not mess with other hotkeys

## 0.8.5

Bugfix [#274](https://github.com/fernandoescolar/vscode-solution-explorer/issues/274): Trying to solve "Element with id is already registered" error.

Enhancement [#277](https://github.com/fernandoescolar/vscode-solution-explorer/issues/277): Adding new command to open a file and focus the document using ctrl+enter keybinding.

Enhancement [#289](https://github.com/fernandoescolar/vscode-solution-explorer/issues/289): Add context option to Open in Solution Explorer

Enhancement [#295](https://github.com/fernandoescolar/vscode-solution-explorer/issues/295): Syntax coloring for .sln files

Renaming the extension terminal from "dotnet" to "solution-explorer" to avoid conflicts with other extensions.

## 0.8.4

Bugfix [#291](https://github.com/fernandoescolar/vscode-solution-explorer/issues/291): allow move folder up/down, thanks to [Spencer Farley](https://github.com/farlee2121)

## 0.8.3

Enhancement [#283](https://github.com/fernandoescolar/vscode-solution-explorer/issues/283): Display folders in project file order in F# projects, thanks to [Spencer Farley](https://github.com/farlee2121)

Enhancement [#284](https://github.com/fernandoescolar/vscode-solution-explorer/issues/284): Enable drag-drop for F# projects, thanks to [Spencer Farley](https://github.com/farlee2121)

Enhancement [#285](https://github.com/fernandoescolar/vscode-solution-explorer/issues/285): Update the add new project template value, thanks to [Fadi Hania](https://github.com/fadihania)

## 0.8.2

Enhancement [#265](https://github.com/fernandoescolar/vscode-solution-explorer/issues/265): adding new parameter `vssolution.showTerminalOnCommand` to show the terminal when a command is executed, `true` by default

Enhancement [#272](https://github.com/fernandoescolar/vscode-solution-explorer/issues/272): Bump webpack from 5.74.0 to 5.76.0

Improved grouping and sorting of context menu options.

Better F# projects support:

- Enhancement [#179](https://github.com/fernandoescolar/vscode-solution-explorer/issues/179) [#269](https://github.com/fernandoescolar/vscode-solution-explorer/issues/269): Add option to open a project file on click, thanks to [Spencer Farley](https://github.com/farlee2121)

- Enhancement [#131](https://github.com/fernandoescolar/vscode-solution-explorer/issues/131) [#268](https://github.com/fernandoescolar/vscode-solution-explorer/issues/268) Display files in proj order for F# projects, thanks to [Spencer Farley](https://github.com/farlee2121)

- Enhancement [#271](https://github.com/fernandoescolar/vscode-solution-explorer/issues/271): Add optional inline project edit button, thanks to [Spencer Farley](https://github.com/farlee2121)

- Enhancement [#270](https://github.com/fernandoescolar/vscode-solution-explorer/issues/270) [#275](https://github.com/fernandoescolar/vscode-solution-explorer/issues/275): Create File above/below, thanks to [Spencer Farley](https://github.com/farlee2121)



## 0.8.1

Bugfix [#264](https://github.com/fernandoescolar/vscode-solution-explorer/issues/264): allow undefined selected item commands

## 0.8.0

Bugfix [#254](https://github.com/fernandoescolar/vscode-solution-explorer/issues/254): Refresh tree view item icons properly, thanks to [panoskj](https://github.com/panoskj)

Bugfix [#252](https://github.com/fernandoescolar/vscode-solution-explorer/issues/252): Fixed a bug when using "Include" project items, thanks to [panoskj](https://github.com/panoskj)

Bugfix [#255](https://github.com/fernandoescolar/vscode-solution-explorer/issues/255): Doesn't open solutions if you don't have open a folder first

Enhancement [#257](https://github.com/fernandoescolar/vscode-solution-explorer/issues/257): Added support for "PropertyGroup" properties within include/exclude paths, thanks to [panoskj](https://github.com/panoskj)

Enhancement [#258](https://github.com/fernandoescolar/vscode-solution-explorer/issues/258): Fixed bug that prevented pasting files, thanks to [panoskj](https://github.com/panoskj)

Bugfix [#261](https://github.com/fernandoescolar/vscode-solution-explorer/issues/261): Fix Project dependent files display, thanks to [lhz](https://github.com/lhzcm)

Bugfix [#5](https://github.com/fernandoescolar/vscode-solution-explorer/issues/5): Keyboard shortcuts not working, thanks to [panoskj](https://github.com/panoskj)

Bugfix [#169](https://github.com/fernandoescolar/vscode-solution-explorer/issues/169): Now "paste" is shown in context menu

## 0.7.5

Bugfix ##239: Fix project expansion, thanks to [Richard Willis](https://github.com/badsyntax)

Bugfix [#238](https://github.com/fernandoescolar/vscode-solution-explorer/issues/238): Not able to change casing when renaming file

Enhancement [#242](https://github.com/fernandoescolar/vscode-solution-explorer/issues/242): Update single package, thanks to [Richard Willis](https://github.com/badsyntax)

PR [#246](https://github.com/fernandoescolar/vscode-solution-explorer/issues/246) Fix spelling, thanks to [Richard Willis](https://github.com/badsyntax)

PR [#247](https://github.com/fernandoescolar/vscode-solution-explorer/issues/247) Use modern ecmascript variable declarations, thanks to [Richard Willis](https://github.com/badsyntax)

Bugfix [#250](https://github.com/fernandoescolar/vscode-solution-explorer/issues/250): new output panel configuration option to select desired behavior `outputChannelMode`: `show`, `append` or `none`.

Enhancement [#245](https://github.com/fernandoescolar/vscode-solution-explorer/issues/245): show nested package references, thanks to [Richard Willis](https://github.com/badsyntax)

## 0.7.4

Enhancement [#230](https://github.com/fernandoescolar/vscode-solution-explorer/issues/230): dotnet core is no more thanks to [ShalokShalom](https://github.com/ShalokShalom)

Bugfix [#227](https://github.com/fernandoescolar/vscode-solution-explorer/issues/227) NuGet packages manager in Windows thanks to [nev-21](https://github.com/nev-21)

## 0.7.3

Enhancement [#223](https://github.com/fernandoescolar/vscode-solution-explorer/issues/223): Allow add new or existing project to solution without selecting a solution file in the tree view

Enhancement [#224](https://github.com/fernandoescolar/vscode-solution-explorer/issues/224): better omnisharp integration thanks to [prettyv](https://github.com/prettyv)

Fixing "Update" section relativepath (related to [#222](https://github.com/fernandoescolar/vscode-solution-explorer/issues/222))

## 0.7.2

Bugfix [#218](https://github.com/fernandoescolar/vscode-solution-explorer/issues/218): Create a file via context menu generates error

Bugfix [#220](https://github.com/fernandoescolar/vscode-solution-explorer/issues/220): Very slow initial load time

Bugfix: Add a solution file to an empty folder generates wrong .sln file format

Fixing [#132](https://github.com/fernandoescolar/vscode-solution-explorer/issues/132): added github action tasks to publish the extension in Open VSX Registry too

## 0.7.1

Bugfix [#216](https://github.com/fernandoescolar/vscode-solution-explorer/issues/216): icons now are loaded right

Enhancement [#132](https://github.com/fernandoescolar/vscode-solution-explorer/issues/132): added github action tasks to publish the extension in Open VSX Registry too

[#224](https://github.com/fernandoescolar/vscode-solution-explorer/issues/224) [#191](https://github.com/fernandoescolar/vscode-solution-explorer/issues/191): adding vcxproj as a known extension in open project dialog

Simplifying the project loading and the different tree project item kinds

Bugfix: add and remove project reference actions now work

Bugfix: avoid create Folder tag when it is not needed

Enhancement: duplicated items error tolerance

## 0.7.0

Improving compatibility: New core engine to load projects based on MsBuild documentation: https://docs.microsoft.com/en-us/visualstudio/msbuild/how-to-use-project-sdk?view=vs-2022 related to [#11](https://github.com/fernandoescolar/vscode-solution-explorer/issues/11), [#129](https://github.com/fernandoescolar/vscode-solution-explorer/issues/129), [#142](https://github.com/fernandoescolar/vscode-solution-explorer/issues/142) and [#174](https://github.com/fernandoescolar/vscode-solution-explorer/issues/174)

Bugfix: now getText is closed after pressing enter

## 0.6.3

Bugfix [#215](https://github.com/fernandoescolar/vscode-solution-explorer/issues/215) copy the commands array to avoid modifying the original config

Bugfix [#214](https://github.com/fernandoescolar/vscode-solution-explorer/issues/214) fixing icon size

Sort .NET Core default folders ("Properties" and "wwwroot") thanks to [LesanOuO](https://github.com/LesanOuO)

Let solution explorer can see code error and git status thanks to [LesanOuO](https://github.com/LesanOuO)

Add netcoreIgnore: .vs thanks to [LesanOuO](https://github.com/LesanOuO)

Async nuget feeds loading

## 0.6.2

Adding new terminal command system

Better display of nuget package version in tree

Use more Visual Studio 2022 icons thanks to [LesanOuO](https://github.com/LesanOuO)

Add api controller template file thanks to [LesanOuO](https://github.com/LesanOuO)

Update: rename files while modifying class name thanks to [LesanOuO](https://github.com/LesanOuO)

Bugfix: await icon loading thanks to [LesanOuO](https://github.com/LesanOuO)

## 0.6.1

Activity bar icon updated thanks to [LesanOuO](https://github.com/LesanOuO)

Bugfix: Solution Explorer not loading automatically the first time thanks to [LesanOuO](https://github.com/LesanOuO)

Bugfix: unable to add files without .cs suffix (like .json .xml ...) thanks to [LesanOuO](https://github.com/LesanOuO)

Bugfix: options panel hide after selection

New template system for new file creation

Enhancement [#57](https://github.com/fernandoescolar/vscode-solution-explorer/issues/57): now you can add or delete solution files

Enhancement [#94](https://github.com/fernandoescolar/vscode-solution-explorer/issues/94): add "Reveal In OS File Manager" command

Add nuget.config support for custom feed sources (only ClearTextPassword credencials are supported)

Some refactoring tasks to avoid using `any` keyword

## 0.6.0

Improving add nuget package command: now it searches in the nuget repository for the package and let you select the version

Improving move and copy commands: now it prevents replacing existing files

Improving the output channel behavior

Enhancement [#9](https://github.com/fernandoescolar/vscode-solution-explorer/issues/9): Adding drag and drop functionality: move  projects, folders and files arround the solution, and copy files and folders between projects

Updating README

Updating to latests node and vscode dependencies versions

Updating  to typescript v4.7.4

New internal activity system to run features

Using vscode fs API

Using vscode clipboard API

## 0.5.0

Adding open solution command

Adding different automatic open solution flags: in root folder, in alt folders, in root folders and subfolders (Enhancement [#204](https://github.com/fernandoescolar/vscode-solution-explorer/issues/204)), and omnisharp integration

Adding command to update package references versions automatically

Bugfix [#205](https://github.com/fernandoescolar/vscode-solution-explorer/issues/205): README images fixed thanks to [Philippe Desmarais](https://github.com/CephalonAhmes)

Adding welcome view when no solution found

Updating README

## 0.4.7

Enhancement [#63](https://github.com/fernandoescolar/vscode-solution-explorer/issues/63): prefix commands with "SolutionExplorer: "

Enhancement [#167](https://github.com/fernandoescolar/vscode-solution-explorer/issues/167): using runtime icons for tree actions

Enhancement [#189](https://github.com/fernandoescolar/vscode-solution-explorer/issues/189): it tries to determine the file extension when you create a new one without extension

Enhancement [#159](https://github.com/fernandoescolar/vscode-solution-explorer/issues/159): added new command: "SolutionExplorer: Select Active Document"

## 0.4.6

Bugfix [#178](https://github.com/fernandoescolar/vscode-solution-explorer/issues/178): Nested items PR [#197](https://github.com/fernandoescolar/vscode-solution-explorer/issues/197) (by @callummarshall9). You can activate this option by setting the `vssolution.itemNesting` parameter to `true`.

Enhancement [#171](https://github.com/fernandoescolar/vscode-solution-explorer/issues/171): load new project templates from `dotnet new --list` command output.

Fixing Dependabot alerts

Move branch from master to main.

## 0.4.5

Bugfix [#183](https://github.com/fernandoescolar/vscode-solution-explorer/issues/183): Pass right parameter into PackageReference contructor (by @Danieladu)

Enhancement [#186](https://github.com/fernandoescolar/vscode-solution-explorer/issues/186): update to C# 10 namespace syntax (by @little512)

Fixing Dependabot alerts

## 0.4.4

Bugfix [#177](https://github.com/fernandoescolar/vscode-solution-explorer/issues/177): cleaning `console.log` calls

Enhancement [#175](https://github.com/fernandoescolar/vscode-solution-explorer/issues/175): adding "Watch Run" command

Fixing Dependabot alerts

## 0.4.3

Bugfix [#165](https://github.com/fernandoescolar/vscode-solution-explorer/issues/165): fixing error loading solutions from alt folders

Bugfix [#118](https://github.com/fernandoescolar/vscode-solution-explorer/issues/118): replacing '&' by '&amp;' in project XML quoted strings

## 0.4.2

Bugfix [#164](https://github.com/fernandoescolar/vscode-solution-explorer/issues/164): revert [#118](https://github.com/fernandoescolar/vscode-solution-explorer/issues/118) solution

## 0.4.1

Bugfix [#155](https://github.com/fernandoescolar/vscode-solution-explorer/issues/155): fixing error deleting folders

Bugfix [#118](https://github.com/fernandoescolar/vscode-solution-explorer/issues/118): save XML special characters encoded: `& < > " '`

Bugfix [#84](https://github.com/fernandoescolar/vscode-solution-explorer/issues/84): avoid errors with non-existing projects in solution

## 0.4.0

Enhancement [#38](https://github.com/fernandoescolar/vscode-solution-explorer/issues/38) [#50](https://github.com/fernandoescolar/vscode-solution-explorer/issues/50) [#158](https://github.com/fernandoescolar/vscode-solution-explorer/issues/158): Add multi folder in workspace support. Thanks to [vlesierse](https://github.com/vlesierse) and [m4ss1m0g](https://github.com/m4ss1m0g) for their PRs.

Upgrading npm packages

## 0.3.12

PR [#150](https://github.com/fernandoescolar/vscode-solution-explorer/issues/150): Adding GitHub specific folder visual. Thanks to [timheuer](https://github.com/timheuer)

## 0.3.11

Upgrading npm packages

Enhancement [#139](https://github.com/fernandoescolar/vscode-solution-explorer/issues/139): Add more project templates. Thanks to [jbactad](https://github.com/jbactad)

Bugfix [#135](https://github.com/fernandoescolar/vscode-solution-explorer/issues/135): Don't focus tree when tracking active file. Thanks to [jbactad](https://github.com/jbactad)

## 0.3.10

Upgrading npm packages

Bugfix [#130](https://github.com/fernandoescolar/vscode-solution-explorer/issues/130): space in file path

## 0.3.9

Bugfix [#125](https://github.com/fernandoescolar/vscode-solution-explorer/issues/125): Right-Click on Solution Nodes does not open context menu

Enhancement [#1](https://github.com/fernandoescolar/vscode-solution-explorer/issues/1): Collapse All buttom in explorer panel

## 0.3.8

Bugfix [#123](https://github.com/fernandoescolar/vscode-solution-explorer/issues/123): Error while deleting an empty folder from project

Bugfix [#115](https://github.com/fernandoescolar/vscode-solution-explorer/issues/115), [#122](https://github.com/fernandoescolar/vscode-solution-explorer/issues/122) and [#124](https://github.com/fernandoescolar/vscode-solution-explorer/issues/124): Solution explorer is shown in explorer window although preference is set to acitivityBar

Bugfix [#113](https://github.com/fernandoescolar/vscode-solution-explorer/issues/113): Add project to solution error. Thanks to [jloureiro09](https://github.com/jloureiro09)

## 0.3.7

Trying to cleanup extension .vsix

## 0.3.6

PR [#100](https://github.com/fernandoescolar/vscode-solution-explorer/issues/100) Configurable Line Endings. Thanks to [jesperbjensen](https://github.com/jesperbjensen)

PR [#105](https://github.com/fernandoescolar/vscode-solution-explorer/issues/105) Fixed empty projects and directories on fs.lstat error. Thanks to [Dvvarf](https://github.com/Dvvarf)

PR [#106](https://github.com/fernandoescolar/vscode-solution-explorer/issues/106) Added ProjectReference and CustomBuild item support to StandardProject. Thanks to [Dvvarf](https://github.com/Dvvarf)

PR [#110](https://github.com/fernandoescolar/vscode-solution-explorer/issues/110) Minor spelling fix in README. Thanks to [vthg2themax](https://github.com/vthg2themax)

Added automated build and publish from Github

## 0.3.5

Bugfix [#80](https://github.com/fernandoescolar/vscode-solution-explorer/issues/80): thanks to [martinothamar](https://github.com/martinothamar) for his PR

PR [#88](https://github.com/fernandoescolar/vscode-solution-explorer/issues/88): thanks to [jesperbjensen](https://github.com/jesperbjensen)

## 0.3.4

Bugfix [#83](https://github.com/fernandoescolar/vscode-solution-explorer/issues/83): fixed dynamic scripts loading due to webpack use.

PR [#75](https://github.com/fernandoescolar/vscode-solution-explorer/issues/75): fix: convert dash to underscore in namespace - by [emrahcetiner](https://github.com/emrahcetiner)

## 0.3.3

Bugfix [#79](https://github.com/fernandoescolar/vscode-solution-explorer/issues/79): fixed dynamic scripts loading due to webpack use.

Bugfix [#25](https://github.com/fernandoescolar/vscode-solution-explorer/issues/25) [#80](https://github.com/fernandoescolar/vscode-solution-explorer/issues/80): check if the project loaded XML has no elements in CPS projects.

## 0.3.2

PR [#72](https://github.com/fernandoescolar/vscode-solution-explorer/issues/72): Added new fsproj cps support - by [marawan31](https://github.com/marawan31)

Bugfix [#67](https://github.com/fernandoescolar/vscode-solution-explorer/issues/67) [#68](https://github.com/fernandoescolar/vscode-solution-explorer/issues/68) [#73](https://github.com/fernandoescolar/vscode-solution-explorer/issues/73) [#77](https://github.com/fernandoescolar/vscode-solution-explorer/issues/77): added webpack compilation in order to reduce the modules load time.

## 0.3.1

Bug fixed: Create new file, project and solution command issues.

New Feature [#61](https://github.com/fernandoescolar/vscode-solution-explorer/issues/61): Now solution file items are shown.

## 0.3.0

Bug fixed [#51](https://github.com/fernandoescolar/vscode-solution-explorer/issues/51): Updated license to CC-BY-SA.

Bug fixed [#49](https://github.com/fernandoescolar/vscode-solution-explorer/issues/49): Modify default 'showMode' and 'trackActiveItem' configuration setting values.

New comand parameter compiler adding a wizard style requesting commad parameters.

Bug fixed [#48](https://github.com/fernandoescolar/vscode-solution-explorer/issues/48): now you can specify the package version when adding a new nuget package to a project.

Bug fixed [#55](https://github.com/fernandoescolar/vscode-solution-explorer/issues/55): changed message to create a new solution.

Bug fixed [#53](https://github.com/fernandoescolar/vscode-solution-explorer/issues/53): deleted test button from solution level.

Bug fixed [#42](https://github.com/fernandoescolar/vscode-solution-explorer/issues/42): added the solution/project path in dotnet commads.

Bug fixed [#54](https://github.com/fernandoescolar/vscode-solution-explorer/issues/54): launch dotnet commands in terminal.

PR [#46](https://github.com/fernandoescolar/vscode-solution-explorer/issues/46): Add an option to disable the question about creating the solution template folder - by [remcoros](https://github.com/remcoros).

PR [#56](https://github.com/fernandoescolar/vscode-solution-explorer/issues/56): Properly handle project files with paths outside the project root - by [mwpenny](https://github.com/mwpenny)

PR [#58](https://github.com/fernandoescolar/vscode-solution-explorer/issues/58): Add support for C/C++ projects (.vcxproj; issue [#19](https://github.com/fernandoescolar/vscode-solution-explorer/issues/19)) - by [mwpenny](https://github.com/mwpenny)

## 0.2.34

Added "win32Encoding" configuration parameter to help people fixing win32 encoding problems in the output.

Bug fixed [#36](https://github.com/fernandoescolar/vscode-solution-explorer/issues/36): chinese encoding problem. Thanks to [darkmfj](https://github.com/darkmfj).

Feature [#23](https://github.com/fernandoescolar/vscode-solution-explorer/issues/23): Added .njsproj project support.

## 0.2.33

Bug fixed [#32](https://github.com/fernandoescolar/vscode-solution-explorer/issues/32): If you select "explorer" mode it doesn't show the "activityBar" icon.

Bug fixed [#35](https://github.com/fernandoescolar/vscode-solution-explorer/issues/35): commented "Project" tag lines in the ".xxproj" files are ignored.

## 0.2.32

Activated again the activity bar show mode. It's not working right. But some people have ask for it.

## 0.2.31

Bug Fixed [#24](https://github.com/fernandoescolar/vscode-solution-explorer/issues/24): Now the solution context menu doesn't show the dotnet core commands if the solution doesn't have any CPS (dotnet core) project.

New feature [#26](https://github.com/fernandoescolar/vscode-solution-explorer/issues/26): Adds a new option: xmlClosingTagSpace. When xmlClosingTagSpace is enabled, closing tags are written as: " />" rather than "/>" - this is for Visual Studio compatibility. (PR [#27](https://github.com/fernandoescolar/vscode-solution-explorer/issues/27) by [dfrencham](https://github.com/dfrencham))

## 0.2.30

New feature [#26](https://github.com/fernandoescolar/vscode-solution-explorer/issues/26): Added a new parameter to set the xml spaces.

Bug fixed [#25](https://github.com/fernandoescolar/vscode-solution-explorer/issues/25): Check if the project XML format is not as expected.

## 0.2.29

New feature [#18](https://github.com/fernandoescolar/vscode-solution-explorer/issues/18): .deployproj files support added.

## 0.2.28

Bug fixed [#21](https://github.com/fernandoescolar/vscode-solution-explorer/issues/21): allow invoke create new empty solution from command palette.

Bug fixed [#20](https://github.com/fernandoescolar/vscode-solution-explorer/issues/20): now the "vssolution.trackActiveItem" configuration setting works right.

## 0.2.27

Litle bugfixed when trying to load solutions in other folder and those folders don't exist.

Ignore empty string in logs.

## 0.2.26

Bug fixed [#16](https://github.com/fernandoescolar/vscode-solution-explorer/issues/16): using this workarround to try to solve the encoding bug in the output channel: https://github.com/Microsoft/vscode-arduino/commit/00d3fefcead1a95ec1b1ffbb32abc0f1b0a47a82

## 0.2.25

Bug fixed [#15](https://github.com/fernandoescolar/vscode-solution-explorer/issues/15): the npm package "xml2js" has been replaced by "xml-js". The idea behind this modification is to keep the structure of the document as similar to the original.

Added `vssolution.altSolutionFolders` configuration parameter to allow specify other folder than the root with .sln files. It is related with the issue [#8](https://github.com/fernandoescolar/vscode-solution-explorer/issues/8).

## 0.2.24

Delete activity bar item, it is not usable for now.

Added track active item.

## 0.2.23

Bug fixed: remove package and remove project reference command.

Bug fixed: do not show the current project in the add referenced project suggesion.

Now the solution explorer is showed in its custom panel in the activity bar.

Updated to vscode 1.23.

## 0.2.11

Added dotnet commands: build, clean, pack, publish, restore, run and test.

## 0.2.10

Bug fixed: error removing a folder with files in old xxproj files.

Added basic support for .shproj files.

Improved xml node name selection on edit old xxproj.

Updated question popups to show 'No' option.

Updated to vscode 1.21.1.

## 0.2.9

Bug fixed: [#6](https://github.com/fernandoescolar/vscode-solution-explorer/issues/6) Wrong warning about incorrect type for xxprojItemTypes.

Updated icons from current theme with the vscode 1.21.0 new features.

Added commands shorcuts (but you have to open the context menu to make it work :( ).

## 0.2.8

Ask for install templates only when at least one solution is found.

Added more inline actions for create files and folders.

Refactoring template engine installation.

Rename command now has the old name value to modify.

Add project command is showed in the right group, and it has a default project destination folder based on name.

## 0.2.7

Removed "Collapse All" button. It doesn't work and causes issues.

## 0.2.6

Copy and Paste command in files, folders and projects.

Commands now are grouped.

Added refresh command as inline icon in folders and projects.

Fixed delete folder command in order to delete all tree.

Changed the icons mode to "solution-explorer", "mix" or "current-theme" in the configuration settings.

Added template system to create new files.

## 0.2.5

Bugfix: Add reference and add package commands now works

Bugfix: It doesn't show the "Cannot read property 'FullPath' of null" on startup (#4)

## 0.2.4

Added add existing project to solution command.

On double click in a file, it is opened and pinned.

(WIP) collapse all button doesn't work due to a issue with the vscode refreshing.

Use installed theme icons: set 'vssolution.useSolutionExplorerIcons' configuration parameter to false.

## 0.2.3

CPS projects take care of ignore configuration parameter on "move to folder" command options.

## 0.2.2

Sort solution and solution folder child items.

## 0.2.1

Refactor commands using command pattern.

Added File Watcher to detect project and solution changes.

Added Output Channel to log commands.

Added move folder and file to folder in project.

Added add and remove packages commands in CPS projects.

Added add and remove project reference commands in CPS projects.

Added create project and solution commands.

Added create and remove solution folder commands.

Added move solution folder and project to solution folder commands.

Added rename solution, solution folder and project commands.

## 0.0.9

Refactoring.

Added configuration settings.

## 0.0.8

Fixing a bug getting the content of a dotnet project sub-folder.

## 0.0.7

Fixing lost dependencies.

## 0.0.6

Cleaning extension binaries.

## 0.0.5

Fixing paths in order it runs in windows (sorry, i'd not tested :( )

## 0.0.4

BugFixed: when it found an unkonwn project type it doesn't crash.

Refactor: using async and await for solution and project operations.

Added WebSite project type support.

Added projects before vs2017 (csproj, vbproj and fsproj) support.

## 0.0.3

Refactoring: all source code has changed.

New "references" icon in solution explorer.

Added context menu commands to create, delete and modify project files and folders.

## 0.0.2

Updated project information, repository and logo.

## 0.0.1

Initial release.

Only Visual Studio Common Project System (VS2017 -> dotnet core) support.

I hope it works :)