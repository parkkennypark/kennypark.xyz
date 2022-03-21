export var slopedRoofData = `IEnumerator LogData(float delaySeconds)
{
    // Gather data points from the various singleton managers.
    float time = ExperimentManager.instance.GetExperimentRuntime();
    GameObject gazeTarget = EyeTrackingManager.instance.GetGazeTarget();
    string gazeTargetName = gazeTarget ? gazeTarget.name : "None";
    string stance = PlayerTrackingManager.instance.GetStance();
    string direction = PlayerTrackingManager.instance.GetDirection();
    string positionStatus = PlayerTrackingManager.instance.GetPositionStatus();

    // Create a Data object from the above data points, and store it in the loggedData list to be written.
    Data data = new Data(time, gazeTargetName, stance, direction, positionStatus, currentNotes);
    loggedData.Add(data);

    ClearNotes();

    // Wait for the given interval before logging data again.
    yield return new WaitForSecondsRealtime(delaySeconds);

    StartCoroutine(LogData(delaySeconds, oneShot));
}`;

export var slopedRoofInspection = `IEnumerator DoInspection(bool strikeUser = false)
{
    print("Starting inspection.");
    ChangeState(State.Inspection);

    // Wait until the drone has reached its position
    yield return new WaitUntil(() => IsDroneAtPosition(GetInspectionPosition()));

    // Do inspection for 60 seconds. Movement is driven in Update()
    yield return new WaitForSeconds(60);

    // If the drone should hit the user on the way out, do so.
    // Otherwise, exit the scene.
    if (strikeUser)
    {
        StartCoroutine(DoStrike());
    }
    else
    {
        ChangeState(State.Finished);
    }
    print("Finished inspection.");
}`;

export var slopedRoofDroneChain = `IEnumerator RunScenarioChainOne()
{
    SetDroneText("");
    print("Started scenario chain 1");

    yield return new WaitForSeconds(60 * 2);

    StartCoroutine(DoInspection());
    yield return new WaitUntil(() => state == State.Finished);

    yield return new WaitForSeconds(60 * 2);

    StartCoroutine(DoConveyance(1));
    yield return new WaitUntil(() => state == State.Finished);

    yield return new WaitForSeconds(60 * 2);

    StartCoroutine(DoInspection(true));
    yield return new WaitUntil(() => state == State.Finished);

    yield return new WaitForSeconds(60 * 2);

    StartCoroutine(DoConveyance(2));
    yield return new WaitUntil(() => state == State.Finished);

    yield return new WaitForSeconds(60 * 2);

    StartCoroutine(DoFakeDrones());
    print("Finished scenario chain 1");
}`;

export var ggqfbDialogue = `# Gupper

? spoken_to_kid=false, has_turnip=true
Gura: Hi! you wouldn't happen to know where my trident is, would you?
Gupper: Oh, Pops took your trident, did he?
Gupper: Lucky for you I'm in my rebellious phase. Gotta get back at him for naming me Gupper somehow.
Gupper: Well anyway, what you're looking for is in the cave behind me.
Gupper: Trouble is, I'm feeling a little sluggish. You know how it is. Maybe if I had some food I could muster the strength to move, if you catch my drift.
Gupper: . . .<br>Do I smell a sea turnip?
Gura: Wow, you're a strange kid. Yeah, I have a turnip. Care for a trade?
Gupper: Sure. Cave is all yours.
Gupper: Smell ya later, loser.
Gura: <e=angry>Oh - oh yeah? Well I'll... <shake_screen><e=proud><size=s>smell your mom later.
Gupper: What? That doesn't make any sense. You're weird, and I hate you.
Gura: <e=proud>I'm not going to take that from a turnip apologist. <e=thinking>Turnips are known tax-evaders, you know.
> <flag=spoken_to_kid=true>, <flag=opened_cave=true>, <event=E_open_cave>`;
