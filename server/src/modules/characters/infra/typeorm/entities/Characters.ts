import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('characters')
export default class Places {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  site_detail_url: string;

  @Column()
  deck: string;

  @Column()
  image: string;

  @Column()
  real_name: string;

  @Column()
  publisher: string;

  @Column()
  creators: string;

  @Column()
  gender: number;

  @Column()
  origin: string;

  @Column()
  count_of_issue_appearances: number;

  @Column()
  birth: string;

  @Column()
  powers: string;

  @Column()
  favorited: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
