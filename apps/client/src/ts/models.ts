import { IPromotionType, IPromotionUserGroupName } from './constants';

export type PromotionTypeKeys = keyof IPromotionType;

export type PromotionUserGroupNameKeys = keyof IPromotionUserGroupName;

export interface IPromotion {
  name: string;
  startDate: number;
  endDate: number;
  type: PromotionTypeKeys;
  userGroupName: PromotionUserGroupNameKeys;
}