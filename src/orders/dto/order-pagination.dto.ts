import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus;
}
