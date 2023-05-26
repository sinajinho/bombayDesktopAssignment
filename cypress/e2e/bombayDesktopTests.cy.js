import 'cypress-iframe'
import bombayGameTable from '../ModalObjects/bombayGameTable'
import bombayHomePage from '../ModalObjects/bombayHomePage'
import bombayRulesModal from '../ModalObjects/bombayRulesModal'
import bombaySettingsModal from '../ModalObjects/bombaySettingsModal'
import { bombayUserData } from '../fixtures/bombayUserData'

const homePage = new bombayHomePage
const settingsModal = new bombaySettingsModal
const gameTable = new bombayGameTable
const rulesModal = new bombayRulesModal

describe('Bombay Desktop Automation Tests', () => {
  beforeEach(() => {
    cy.openBombayDesktopLobby()
  })
  it('User can change nickname from settings', () => {
    homePage.generateRandomNickname()
    homePage.openSettingsModal()
    settingsModal.changeUserNickname(bombayUserData.newNickname)
    homePage.openSettingsModal()
    settingsModal.checkUserChangedNickname(bombayUserData.newNickname)
  })
  it('User can join with featured game table and read the game rules', () => {
    homePage.generateRandomNickname()
    homePage.joinFeaturedGameTable(bombayUserData.userBalance, bombayUserData.userTotalBet)
    gameTable.openGameRules()
    rulesModal.verifyRulesCorrectness()
  })
})