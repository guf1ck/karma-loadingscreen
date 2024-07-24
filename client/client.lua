local Running = false

AddEventHandler("playerSpawned", function ()
    if not Running then
        ShutdownLoadingScreenNui()
        Running = true
    end
end)

Citizen.CreateThread(function()
	 	SetNuiFocus(true, false)
end)