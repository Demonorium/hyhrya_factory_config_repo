// priority: 0

// EntityJSEvents.addGoalSelectors('minecraft:skeleton', e => {
//     // let Player = Java.loadClass('net.minecraft.world.entity.player.Player')
//     let GunData = Java.loadClass('com.atsuishio.superbwarfare.data.gun.GunData')
//     let IntValue = Java.loadClass('com.atsuishio.superbwarfare.data.gun.value.IntValue')
//     let GanItem = Java.loadClass('com.atsuishio.superbwarfare.item.gun.GunItem')
//     const checkIfGunItem = /** @param {Internal.ItemStack} item */ item => (item != null && item.id.startsWith("superbwarfare") && item.getItem().getClass().getSuperclass() == GanItem);
    
//     e.customGoal(
//         'shot_in_player',
//         1,
//         mob => mob.getTarget() != null && checkIfGunItem(mob.getHeldItem("main_hand")),
//         mob => mob.getTarget() != null && checkIfGunItem(mob.getHeldItem("main_hand")),
//         true,
//         mob => {},
//         mob => {},
//         true,
//         /** @param {Internal.Mob} mob */ mob => {
//             const weapon = mob.getHeldItem("main_hand")
//             if (!checkIfGunItem(weapon)) {
//                 return;
//             }

//             const tag = weapon.getNbt()
//             let raw_gdt = null 
//             if (tag.contains("GunData")) {
//                 raw_gdt = tag.getCompound("GunData")
//             } else {
//                 raw_gdt = NBT.compoundTag()
//                 tag.put("GunData", raw_gdt)
//             }
            
//             if (IntValue(raw_gdt, "VirtualAmmo").get() <= 0) {
//                 raw_gdt.put("VirtualAmmo", NBT.intTag(9999))
//             }

//             const gunData = GunData.from(weapon)
//             gunData.tick(null, true)

//             if (gunData.shouldStartReloading(null)) {
//                 gunData.startReload()
//                 return;
//             }

//             if (gunData.reloading()) {
//                 return;
//             }

//             if (!gunData.coo(null)) {
//                 return;
//             }
            
//             if (mob.getTarget() == null) {
//                 return
//             }
//             const target = mob.getTarget()
//             const targetPos = target.eyePosition.add(0, -0.4, 0)
//             mob.getLookControl().setLookAt(targetPos)

            
//             if (mob.getLookControl().isLookingAtTarget()) {
//                 // const pXRot = mob.lookAngle

//                 // let f = pXRot * (Math.PI / 180);
//                 // let f1 = -pYRot * (Math.PI / 180);
//                 // let f2 = Mth.cos(f1);
//                 // let f3 = Mth.sin(f1);
//                 // let f4 = Mth.cos(f);
//                 // let f5 = Mth.sin(f);
                                
//                 // angle = new Vec3d(f3 * f4, -f5, f2 * f4);

                
//                 const currentPos = mob.eyePosition.add(0, -0.4, 0)

//                 const angle = targetPos.subtract(currentPos).normalize()

//                 gunData.shoot(mob.level, currentPos, angle, 5.3, true)
//             }
//         }
//     )

//     // e.useItem(1, 
//     //     Item.of("superbwarfare:homemade_shotgun"), 
//     //     "superbwarfare:devotion_fire_1p", 
//     //     mob => mob.getHeldItem("main_hand") != null && mob.getHeldItem("main_hand").id.startsWith("superbwarfare") && mob.getTarget() != null
//     // )

// })
