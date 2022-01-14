USE HowKteam 
GO

-- Lấy ra danh sách mã giáo viên kèm tuổi và đưa vào con trỏ GiaoVienCursor

DECLARE GiaoVienCursor CURSOR FOR SELECT MAGV, (YEAR(GETDATE()) - YEAR(NGSINH)) FROM dbo.GIAOVIEN 

OPEN GiaoVienCursor

CLOSE GiaoVienCursor



















