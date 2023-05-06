import { CommentService } from './comment.service';
export declare class CommentController {
    private handleComment;
    constructor(handleComment: CommentService);
    getComment(id: string): Promise<any>;
    postComment(body: any): Promise<any>;
}
