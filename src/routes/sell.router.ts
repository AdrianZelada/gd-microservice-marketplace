import { Request, Response, Router } from "express";
export default function SellRoute(router: Router) {

    router.get('/', (req: Request, res: Response) => {
        const num = randomNumber(5);
        console.log(num);
        res.json({
            count: num
        });
    });
    return router;
}

function randomNumber(max: number) {
    return Math.floor(Math.random() * ((max + 1) - 1));
}
  