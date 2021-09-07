import { NextFunction, Request, Response } from 'express';

import Doc from '../models/Doc';

export async function getMainDoc(req: Request, res: Response, next: NextFunction) {
  try {
    const doc = await Doc.findOne({ title: 'Untitled' });

    res.json(doc);
  } catch (err) {
    next(err);
  }
}

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const {id} = req.params;

    const doc = await Doc.findOne({ _id: id });

    res.json(doc);
  } catch (err) {
    next(err);
  }
}
