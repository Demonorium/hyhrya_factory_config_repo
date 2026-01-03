// priority: 0

ComputerCraftEvents.peripheral(event => {
    const reflectBool = Java.loadClass("java.lang.Boolean")

    event.registerPeripheral("missle_silo", "ballistix:launchercontrolpaneltier3")
        .mainThreadMethod("launch", (container, direction, arguments) => {
            let need_start = false
            if (arguments.length < 1) {
                need_start = true
            } else {
                need_start = arguments[0]
            }

            let data = container.entityData
            let internal_data = data.getCompound("propertydata")

            const old_value = internal_data.getBoolean("shouldlaunch")
            internal_data.putBoolean("shouldlaunch", reflectBool.valueOf(need_start).booleanValue())
            container.setEntityData(data)
            return old_value
        })
        .mainThreadMethod("target", (container, direction, arguments) => {
            let data = container.entityData
            let internal_data = data.getCompound("propertydata")
            
            let target = internal_data.getIntArray("target")
            let targetX = target[0]
            let targetY = target[1]
            let targetZ = target[2]
            
            if (arguments.length == 3) {
                target[0] = arguments[0]
                target[1] = arguments[1]
                target[2] = arguments[2]
                container.setEntityData(data)
            }
            
            return [targetX, targetY, targetZ]
        })
    event.registerPeripheral("fumo_radar", "superbwarfare:fumo_25")
        .mainThreadMethod("set_mode", (container, direction, arguments) => {
            let data = container.entityData
            data.putInteger("Type", arguments[0])
            data.putInteger("Time", arguments[1])
            container.setEntityData(data)
        })

})