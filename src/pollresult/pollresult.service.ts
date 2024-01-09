import { Inject, Injectable } from '@nestjs/common';
import { CreatePollresultDto } from './dto/create-pollresult.dto';
import { UpdatePollresultDto } from './dto/update-pollresult.dto';
import { PollResult } from './schemas/pollresult.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatGateway } from 'src/chat/chat.gateway';
// import { CrmService } from 'src/crm/crm.service';

@Injectable()
export class PollresultService {

  constructor(
    @InjectModel(PollResult.name) private pollResultModel: Model<PollResult>,
    @Inject(ChatGateway) private chatcmd: ChatGateway,
    // @Inject(CrmService) private crmService: CrmService
  ) { }

  async create(createPollresultDto: CreatePollresultDto) {
    const newdPlresult = await new this.pollResultModel(createPollresultDto);

    /*
    if (newdPlresult.crm['costumer'] && newdPlresult.crm['product']) {
      await this.crmService.create(newdPlresult, newdPlresult._id.toString());
    }
    */

    const { _id, staff__id, pollGrp_id, status } = newdPlresult;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD('pollresult', _id.toString(), staff__id, staff__id, adata);
    return newdPlresult.save();
  }

  async findByGroup(pollGrp_id: string): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id: pollGrp_id }).exec();
  }

  async findByStatus(pollGrp_id: string, status: number, date_ini: number, date_end: number): Promise<PollResult[]> {
    if (date_ini === 0 && date_end === 0) {
      return await this.pollResultModel.find({ pollGrp_id: pollGrp_id, status: status }).exec();
    }
    return await this.pollResultModel.find({ pollGrp_id, status, date_ini: { '$gt': date_ini }, date_end: { '$lt': date_end } }).exec();
  }

  async findByDate(pollGrp_id: string, date_ini: number, date_end: number): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id, date_ini, date_end }).exec();
  }

  findAll() {
    return `This action returns all pollresult`;
  }

  async findOne(id: string) {
    return await this.pollResultModel.findById(id).exec();
  }

  async update(id: string, updatePollresultDto: UpdatePollresultDto, user: any) {
    const { staff__id, pollGrp_id, status } = updatePollresultDto;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD('pollresult', id, user.staff__id, staff__id, adata);
    if (updatePollresultDto.ended) {

    }
    updatePollresultDto.status_date = (new Date()).getTime();
    return await this.pollResultModel.findByIdAndUpdate(id, updatePollresultDto);
  }

  async updatePartial(id: string, data: any, user: any) {
    const { fieldName, staff__id, chats, status, pollGrp_id, pollGrpName, staff_name } = data;

    if (fieldName === 'status') {
      const adata = { status, pollGrp_id }
      await this.chatcmd.handleNotifCMD('pollresult', id, user.id, staff__id, adata);
    } else {
      const msg = chats[chats.length - 1];
      const adata = { status, pollGrp_id, pollGrpName, staff_name, msg }
      await this.chatcmd.handleNotifCMD('chat', id, user.id, staff__id, adata);
    }
    return await this.pollResultModel.findByIdAndUpdate(id, { $set: { chats, status } });
  }

  async remove(id: string) {
    const newdPlresult = await this.pollResultModel.findById(id);
    const { _id, staff__id, pollGrp_id, status } = newdPlresult;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD('pollresult', _id.toString(), staff__id, staff__id, adata);
    return await this.pollResultModel.findByIdAndRemove(id);
  }

  async findByStaffResult(staff__id: string, status: number, date_ini: number, date_end: number) {
    // let result = [];
    const options = { status: status };
    options['staff__id'] = staff__id;
    if (date_ini > 0 && date_end > 0) {
      options['date_ini'] = { $gt: date_ini };
      options['date_end'] = { $lt: date_end };
    }
    const result = [];
    (await this.pollResultModel.find(options).sort({ 'date_ini': 1 }))
      .forEach(pr => {
        result.push({
          _id: pr._id,
          activity_logo: pr.pollGrpLogo || '',
          activity_name: pr.pollGrpName,
          date_end: pr.date_end,
          date_ini: pr.date_ini,
          price: pr.price || 0,
          status: pr.status,
          status_date: pr.status_date,
        })
      });
    return { status: 200, data: result };
  }

  async findByAnalitic(crm: string, staff__idList: string[], pollGrpList: string[], costumList: string[], prodList: string[], date_ini: number, date_end: number) {
    // let result = [];
    const options = { status: { $gt: 2 } };
    if (date_ini > 0 && date_end > 0) {
      options['date_ini'] = { $gt: date_ini };
      options['date_end'] = { $lt: date_end };
    }

    if (staff__idList.length > 0) {
      options['staff__id'] = { $in: staff__idList };
    }

    if (pollGrpList.length > 0) {
      options['pollGrp_id'] = { $in: pollGrpList };
    }

    if (costumList.length > 0) {
      options['crm_costum_id'] = { $in: costumList };
    }

    if (prodList.length > 0) {
      options['crm_prod_id'] = { $in: prodList };
    }

    // options.sort = {date_ini:1}
    // .sort({date_ini:1}
    // console.log(crm)
    if (crm && crm === 'T') {
      return { status: 200, data: await this.result2crm(options) };
    } else {
      // result = await this.pollResultModel.find(options).sort({ 'date_ini': 1 });
      return { status: 200, data: await this.result2activity(options) };
    }
  }

  async result2crm(options: any) {
    const result = [];
    (await this.pollResultModel.find(options).sort({ 'date_ini': 1 }))
      .forEach(pr => {
        result.push({
          _id: pr._id,
          date_ini: pr.date_ini,
          date_end: pr.date_end,
          tasker_id: pr.staffId,
          tasker_name: pr.staff_name || 'Sin nombre',
          activity_id: pr.pollGrp_id,
          activity_name: pr.pollGrpName,
          costumer_name: pr.crm_costum_name,
          crm_products: pr.crm_prod_name,
        })
      });
    return result;
  }

  async result2activity(options: any) {
    const result = [];
    // const resultM = {};
    let headResult = {};
    // let total = 0;
    // let header: any;
    (await this.pollResultModel.find(options).sort({ 'date_ini': 1 }))
      .forEach(pr => {
        const item = {_id: pr._id,
          date_end: pr.date_end,
          geoLocEnd: pr.geoLocEnd,
          date_ini: pr.date_ini,
          geoLocStart: pr.geoLocStart,
          tasker_name: pr.staff_name || 'Sin nombre',
          ...pr.values}
        result.push(item);
        headResult = { ...headResult, ...item }
      });
    result.unshift(headResult);
    return result;
  }

  async getChat(id: string) {
    const plr = await this.pollResultModel.findById(id).exec();
    const json = plr.toJSON();
    // const {chats} = plr;
    return json.chats;
  }
}
