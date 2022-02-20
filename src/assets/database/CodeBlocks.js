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
