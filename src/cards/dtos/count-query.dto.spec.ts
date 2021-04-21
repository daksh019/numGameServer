import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CountQueryDto } from './count-query.dto';

describe('Count Query Dto', () => {
  describe('count', () => {
    it('should pass if count correctly set', async () => {
      const query = {
        count: 4,
      };
      const object = plainToClass(CountQueryDto, query);
      const [error] = await validate(object);
      expect(error).toBeFalsy();
    });

    it('should throw an error if count is not defined', async () => {
      const query = {};
      const object = plainToClass(CountQueryDto, query);
      const [error] = await validate(object);
      expect(error).toBeDefined();
      expect(error.property).toEqual('count');
      expect(error.constraints.isDefined).toBeDefined();
    });

    it('should throw an error if count is not a number', async () => {
      const query = {
        count: 'a',
      };
      const object = plainToClass(CountQueryDto, query);
      const [error] = await validate(object);
      expect(error).toBeDefined();
      expect(error.property).toEqual('count');
      expect(error.constraints.isNumber).toBeDefined();
    });

    it('should throw an error if count is greater than 12', async () => {
      const query = {
        count: 13,
      };
      const object = plainToClass(CountQueryDto, query);
      const [error] = await validate(object);
      expect(error).toBeDefined();
      expect(error.property).toEqual('count');
      expect(error.constraints.max).toBeDefined();
    });

    it('should throw an error if count is less than 4', async () => {
      const query = {
        count: 3,
      };
      const object = plainToClass(CountQueryDto, query);
      const [error] = await validate(object);
      expect(error).toBeDefined();
      expect(error.property).toEqual('count');
      expect(error.constraints.min).toBeDefined();
    });
  });
});
