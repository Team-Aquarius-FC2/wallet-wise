// equivalent file to starWarsControllers.ts
import type { RequestHandler } from 'express';
import db from '../model/database.ts';

interface adventureController {
  getAdventures: RequestHandler;
  getAdventureDetails: RequestHandler;
  getExpenses: RequestHandler;
  getBalances: RequestHandler;
  createAdventure: RequestHandler;
}

const adventureController = {} as adventureController;

//getAdventures: gets all adventures (Main page - ‘/’)
adventureController.getAdventures = async (req, res, next) => {
  try {
    // const getAdventures = `SELECT * FROM adventures`; // Rose needs expenses
    // const getAdventures = `SELECT * FROM adventures
    //     FULL OUTER JOIN expenses
    //     ON adventures.id = expenses.id`;
        const getAdventures = `SELECT a.id, a.name, a.description, a.start_date, a.end_date, a.created_by, a.members, SUM(e.amount) as amount
        FROM adventures a
        LEFT JOIN expenses e ON e.adventure_id = a.id
        GROUP BY a.id, a.name, a.description , a.start_date, a.end_date, a.created_by, a.members`
    // const getAdventures = `SELECT * FROM adventures
    // LEFT JOIN expenses
    // ON adventures.id = expenses.id`; // This does fetch adventure_id, payer_id, amount and description, but everything else is NULL & it's not fetching the entire
    const result = await db.query(getAdventures);
    res.locals.getAllAdventures = result.rows;
    console.log(res.locals.getAllAdventures);
    return next();
  } catch (err) {
    return next(`${err} Error loading adventures`);
  }
};

//getAdventureDetails: gets one adventure by id (‘/adventure-details')
adventureController.getAdventureDetails = async (req, res, next) => {
  try {
    const getAdventureDetails = `SELECT * FROM adventures`;
    const result = await db.query(getAdventureDetails);
    res.locals.getAllAdventureDetails = result.rows;
    return next();
  } catch (err) {
    return next(`${err} Error loading adventure details`);
  }
};

//getExpenses: gets expenses for one adventure by id (‘/adventure-details/expenses/:id’)
adventureController.getExpenses = async (req, res, next) => {
  try {
    // const getExpenses = `SELECT * FROM SUM(e.amount) as amount
    // FROM adventures a
    // LEFT JOIN expenses e ON e.adventure_id = a.id`;
    const getExpenses = `SELECT a.id, a.name, a.description, a.start_date, a.end_date, a.created_by, a.members, SUM(e.amount) as amount
    FROM adventures a
    LEFT JOIN expenses e ON e.adventure_id = a.id
    GROUP BY a.id, a.name, a.description , a.start_date, a.end_date, a.created_by, a.members`
    const result = await db.query(getExpenses);
    res.locals.getAllExpenses = result.rows;
    return next();
  } catch (err) {
    return next(`${err} Error loading expenses`);
  }
};

//getBalances: gets balances for one adventure by id (‘adventure-details/balances:id’)
adventureController.getBalances = async (req, res, next) => {
  try {
    const getBalances = `SELECT * FROM expenses`; // Need to add a way to grab all the expneces from each adventure by ID
    const result = await db.query(getBalances);
    res.locals.getAllBalances = result.rows;
    return next();
  } catch (err) {
    return next(`${err} Error loading balances`);
  }
};

// createAdventure: adds new adventure (‘/create-adventure’)
adventureController.createAdventure = async (req, res, next) => {
  try {
    const createAdventure = `INSERT INTO adventures(id, created_at, name, description, start_date, end_date, created_by, members)
        VALUES()`;
    const result = await db.query(createAdventure);
    res.locals.createNewAdventure = result.rows;
    return next();
  } catch (err) {
    return next(`${err} Error creating new adventure`);
  }
};

export default adventureController;
