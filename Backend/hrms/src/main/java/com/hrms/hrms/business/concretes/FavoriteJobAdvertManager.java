package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.FavoriteJobAdvertService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.FavoriteJobAdvertDao;
import com.hrms.hrms.entities.concretes.FavoriteJobAdvert;

@Service
public class FavoriteJobAdvertManager implements FavoriteJobAdvertService{
	
	private FavoriteJobAdvertDao favoriteJobAdvertDao;
	
	@Autowired
	public FavoriteJobAdvertManager(FavoriteJobAdvertDao favoriteJobAdvertDao) {
		super();
		this.favoriteJobAdvertDao = favoriteJobAdvertDao;
	}

	@Override
	public DataResult<List<FavoriteJobAdvert>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<FavoriteJobAdvert>>(this.favoriteJobAdvertDao.findAll(),"Favori ilanlar listelendi");
	}

	@Override
	public DataResult<FavoriteJobAdvert> add(FavoriteJobAdvert entity) throws Exception {
		FavoriteJobAdvert isFavori=this.favoriteJobAdvertDao.getByJobSeeker_IdAndJobAdvert_Id(entity.getJobSeeker().getId(), entity.getJobAdvert().getId());
		if(isFavori!=null) {
			
			return new ErrorDataResult<FavoriteJobAdvert>(null,"Zaten favori olarak eklemişsiniz");
		}
		FavoriteJobAdvert favoriteJobAdvert= this.favoriteJobAdvertDao.save(entity);
		return new SuccessDataResult<FavoriteJobAdvert>(favoriteJobAdvert,"Favori eklendi");
	}

	@Override
	public Result delete(FavoriteJobAdvert entity) throws Exception {
		
		this.favoriteJobAdvertDao.delete(entity);
		return new SuccessResult("Favoriden Çıkarıldı");
	}

	@Override
	public DataResult<FavoriteJobAdvert> update(FavoriteJobAdvert entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<List<FavoriteJobAdvert>> getFavoriteJobAdvert(int jobSeekerId) throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<FavoriteJobAdvert>>(this.favoriteJobAdvertDao.getByJobSeeker_Id(jobSeekerId));
	}

	@Override
	public DataResult<FavoriteJobAdvert> deleteByJobAdvertId(int id) throws Exception {
		this.favoriteJobAdvertDao.deleteByJobAdvert_Id(id);
		return new SuccessDataResult<FavoriteJobAdvert>(null,"İlan Silindi");
	}

}
