import { Instance, SnapshotOut, types } from "mobx-state-tree"
// import { CharacterStoreModel } from "../character-store/character-store"
import { AuthenticationStoreModel } from "../authentication-store/authentication-store"
import { UserStoreModel } from "../user-store/user-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  // characterStore: types.optional(CharacterStoreModel, {} as any),
  authenticationStore : types.optional(AuthenticationStoreModel, {} as any),
  userStore : types.optional(UserStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */ 
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}